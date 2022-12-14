import { useState } from 'react';
import './App.css';
import QuestionSet from './Components/QuestionSet'

const App = () => {

  const [display, setDisplay] = useState(true)

  return (
    <div className="App">
      <h1 className='title'>Movie Night!</h1>
      {display && <QuestionSet setDisplay={setDisplay} />}
    </div>
  );
}

export default App;
