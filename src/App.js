import './App.css';
import ShapeArena from './components/ShapeArena';
import React, { useEffect, useState } from 'react';

function App() {
  console.log('running app')
  
  const [comments, setComments] = useState([])

  async function dataRequest() {
    let data = await fetch('https://p2-backend-cubechaser.herokuapp.com/comments')
    data = await data.json()
    console.log(data)
    setComments(data)
  }

  useEffect(() => {
   dataRequest()
  }, [])

  return (
    <div className="App" >
      <ShapeArena data={comments} />
    </div>
  );
}

export default App;
