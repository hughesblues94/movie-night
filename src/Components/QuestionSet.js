import { useState } from "react";
import '../Styles/QuestionSet.css'
import userQuestions from '../userQuestions.json'
import MovieSuggestion from "./MovieSuggestion";

const QuestionSet = ({ setDisplay }) => {


    const [answers, setAnswers] = useState({
        genre: "",
        length: "",
        medium: "",
        quality: ""
    })

    console.log(answers)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [finish, setFinish] = useState(false)
    const [results, setResults] = useState({})

    const { question, responses, key } = userQuestions[currentQuestion]

    const handleButtonClick = (response) => {
        if (finish)
            console.log("these are the answers: ", answers)

        setResults(answers);
        if ((currentQuestion + 1) === userQuestions.length) {
            setFinish(true)
            //setDisplay(false)

        } else {
            setCurrentQuestion(currentQuestion + 1)
        }

        setAnswers({ ...answers, [key]: response })
    }

    return (
        <div>
            <h2 className="question">{question}</h2>
            <div className="button-container">

                {responses.map(response => {
                    return <button className="button" onClick={() => handleButtonClick(response)}>{response}</button>
                })}


            </div>
            {finish && <MovieSuggestion results={results} />}
        </div>
    );
}

export default QuestionSet;