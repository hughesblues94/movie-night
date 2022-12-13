import { useState } from 'react';
import './App.css';
import GenreList from './Components/GenreList';

function App() {

  const [start, setStart] = useState(false)


  return (
    <div className="App">
      <h1>Movie Night!</h1>

      <button onClick={() => setStart(true)}>Get Started</button>
      {start && <GenreList />}

    </div>
  );
}

export default App;
