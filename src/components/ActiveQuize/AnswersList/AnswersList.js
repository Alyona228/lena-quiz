import React from 'react'
import './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem.js'

const AnswersList = (props) => {
  // console.log(1, props.onAnswerClick)
  return (
    <ul className='answerslist'>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList
