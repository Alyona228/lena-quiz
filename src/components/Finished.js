import React from 'react'
import { SUCCESS } from '../constants/constants'
import classes from './Finished.module.css'

const Finished = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === SUCCESS) {
      total++
    }

    return total
  }, 0)
  console.log(successCount)
  return (
    <div className={classes.finished}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]],
          ]
          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question} &nbsp;
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      <p>
        Правильно {successCount} из {props.quiz.length}
      </p>

      <div>
        <button className={classes.fini}>Повторить</button>
        <button className={classes.fini}>Пройти ещё раз</button>
      </div>
    </div>
  )
}

export default Finished
