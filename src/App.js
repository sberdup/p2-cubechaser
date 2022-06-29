import './App.css';
import ShapeArena from './components/ShapeArena';
import React, { useEffect, useState } from 'react';

function App() {
  console.log('running app')
  // test data to make sure backend is working for now
  const [comments, setComments] = useState([])

  async function dataRequest() {
    await fetch('https://p2-backend-cubechaser.herokuapp.com/comments')
    .then(r => r.json())
    .then(data => {
      setComments(data[0])
    })
  }

  useEffect(() => {
   dataRequest()
  }, [])

  return (
    <div className="App" >
      <ShapeArena data={comments.content} />
    </div>
  );
}

export default App;
