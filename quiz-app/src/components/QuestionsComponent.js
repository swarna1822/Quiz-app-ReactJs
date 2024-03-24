import React from 'react'

const QuestionsComponent = ({questions,onAnswerClick}) => {
  return (
    <div className='questions'>
        <h2>{questions.question}</h2>
        <ul className='options'>
            {questions.answerOptions.map((option)=>{
                return (
                    <li key={option.text}>
                        <button onClick={()=>onAnswerClick(option.isCorrect)}></button>
                    </li>
                )
            })}
        </ul>
      
    </div>
  )
}

export default QuestionsComponent
