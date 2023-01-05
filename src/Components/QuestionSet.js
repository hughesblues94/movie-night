import { useState } from "react";
import '../Styles/QuestionSet.css'
import userQuestions from '../userQuestions.json'
import MovieSuggestion from "./MovieSuggestion";

const QuestionSet = () => {
    const [results, setResults] = useState({})

    const currentQuestion = Object.keys(results).length
    console.log(Object.keys(results))

    const { question, responses, key } = userQuestions[currentQuestion] || {}

    const handleButtonClick = (response) => {
        setResults({ ...results, [key]: response });
    }

    const handleReset = () => {
        setResults({})
    }

    return (
        <div>
            <h1 className='title'>Movie Night!</h1>
            <h2 className="question">{question}</h2>
            <div className="button-container">

                {currentQuestion !== userQuestions.length && responses.map((response) => {
                    return <button key={response} className="button" onClick={() => handleButtonClick(response)}>{response}</button>
                })}

            </div>
            {currentQuestion === userQuestions.length && <MovieSuggestion results={results} handleReset={handleReset} />}
        </div>
    );
}

export default QuestionSet;