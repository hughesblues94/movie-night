import { useState } from 'react';
import './App.css';
import Question from './Components/Question'
import userQuestions from './userQuestions.json'
import getGenreList from './requests/getGenreList';

function App() {


  const [show, setShow] = useState(true)
  const [questionTwo, setQuestionTwo] = useState(false)

  return (
    <div className="App">
      <h1>Movie Night!</h1>

      {show && <Question question={userQuestions[0].question} responses={userQuestions[0].responses} action={getGenreList} setShow={setShow} setQuestionTwo={setQuestionTwo} />}
      {questionTwo && <Question question={userQuestions[1].question} responses={userQuestions[1].responses} action={getGenreList} setShow={setQuestionTwo} />}


    </div>
  );
}

export default App;
