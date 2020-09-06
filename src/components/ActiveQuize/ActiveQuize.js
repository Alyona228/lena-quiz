import React from 'react'
import './ActiveQuize.css'
import AnswersList from './AnswersList/AnswersList.js'

const ActiveQuize = (props) => {
  return (
    <div className='activequize'>
      <p className='question'>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>
      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuize
