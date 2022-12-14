import { useState } from "react";
import '../Styles/QuestionSet.css'
import userQuestions from '../userQuestions.json'

const QuestionSet = () => {

    const [answers, setAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [finish, setFinish] = useState(false)
    const { question, responses } = userQuestions[currentQuestion]

    const handleButtonClick = (response) => {
        console.log(answers)
        if (finish) return

        if ((currentQuestion + 1) === userQuestions.length) {
            setFinish(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }

        setAnswers([...answers, response])
    }

    return (
        <div>
            <h2 className="question">{question}</h2>
            <div className="button-container">

                {responses.map(response => {
                    return <button className="button" onClick={() => handleButtonClick(response)}>{response}</button>
                })}
            </div>
        </div>
    );
}

export default QuestionSet;