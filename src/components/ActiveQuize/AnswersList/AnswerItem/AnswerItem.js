import React from 'react'
import './AnswerItem.css'
const AnswerItem = (props) => {
  console.log(props.onAnswerClick)
  return (
    <li
      className='answeritem'
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem

// const cls = [classes.AnswerItem]

// if (props.state) {
//   cls.push(classes[props.state])
// }
