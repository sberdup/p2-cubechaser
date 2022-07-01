import './App.css';
import ShapeArena from './components/ShapeArena';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import MainMenu from './routes/MainMenu';
import ScoreBoard from './routes/ScoreBoard';
import HighScoreForm from './components/HighScoreForm';

function App() {
  console.log('running app')
  // test data to make sure backend is working for now
  const [highScores, setHighScores] = useState([])
  //lifted state from ShapeArena to give to HighScoreForm
  const [cubesCollected, setCubesCollected] = useState(0)


  async function dataRequest() {
    await fetch('https://p2-backend-cubechaser.herokuapp.com/highscores')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setHighScores(data)
      })
  }

  useEffect(() => {
    dataRequest()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='scores' element={<ScoreBoard data={highScores} />} />
        <Route path='game' element={<ShapeArena cubesCollected={cubesCollected} setCubesCollected={setCubesCollected} />} />
        <Route path='newhighscore' element={<HighScoreForm cubesCollected={cubesCollected}/>} />
      </Routes>
    </div>
  );
}

export default App;
