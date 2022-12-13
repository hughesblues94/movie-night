const Question = ({ question, responses, action, setShow, setQuestionTwo }) => {
    return (
        <div>
            <h1>{question}</h1>
            <div>
                {responses.map(cat => {
                    return <button className="button" onClick={() => {
                        action(cat)
                        setShow(false)
                        setQuestionTwo(true)
                    }}>{cat}</button>
                })}
            </div>
        </div>
    );
}

export default Question;