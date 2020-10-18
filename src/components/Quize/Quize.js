import React from 'react'
import classes from './Quize.module.css'
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'
import Finished from '../../components/Finished.js'
import { SUCCESS } from '../../constants/constants'
class Quize extends React.Component {
  state = {
    results: {}, //  {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зеленый', id: 4 },
        ],
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1700', id: 1 },
          { text: '1702', id: 2 },
          { text: '1703', id: 3 },
          { text: '1803', id: 4 },
        ],
      },

      {
        question: 'Когда всё началось?',
        rightAnswerId: 1,
        id: 3,
        answers: [
          { text: '2017', id: 1 },
          { text: '2020', id: 2 },
          { text: '2016', id: 3 },
          { text: '2015', id: 4 },
        ],
      },
      {
        question: 'Как меня зовут?',
        rightAnswerId: 4,
        id: 4,
        answers: [
          { text: 'Алёна', id: 1 },
          { text: 'Миша', id: 2 },
          { text: 'Клава', id: 3 },
          { text: 'Шарик', id: 4 },
        ],
      },
      {
        question: 'Что такое xPON?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: 'Fiber to the Building', id: 1 },
          { text: 'Passive optical network', id: 2 },
          { text: 'активная оптическая сеть', id: 3 },
          { text: 'местная телефонная сеть', id: 4 },
        ],
      },
      {
        question: 'Диапазон покрытия сети xPON ?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '100 км', id: 1 },
          { text: '5 км', id: 2 },
          { text: 'до 20 км', id: 3 },
          { text: 'от 20 до 50 км', id: 4 },
        ],
      },
      {
        question: 'Сколько абонентов можно подключить на один порт OLT ?',
        rightAnswerId: 1,
        id: 2,
        answers: [
          { text: '64', id: 1 },
          { text: '48', id: 2 },
          { text: '16', id: 3 },
          { text: '4', id: 4 },
        ],
      },
      {
        question: 'Какое затухание вносит сплиттер 1:4 ?',
        rightAnswerId: 4,
        id: 2,
        answers: [
          { text: '2dB км', id: 1 },
          { text: '7Mb', id: 2 },
          { text: '20 dB', id: 3 },
          { text: '7,4 dB', id: 4 },
        ],
      },
      {
        question:
          'Что означает маркировка Патч-корд оптический SC/UPC – SC/UPC Simplex 5м?',
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: 'Что у него в названии есть четыре буквы', id: 1 },
          {
            text:
              'Пачкорд, состоящий из одной жилы оптического или пластикового волокна и наружной оболочки.Тип коннектора- SC, тип полировки- UPC, длина 5м',
            id: 2,
          },
          { text: 'что это делитель оптического потока', id: 3 },
          { text: 'что расстояние от модема до ПК должно быть 5м', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    // if (this.state.answerState) {
    //   const key = Object.keys(this.state.answerState)[0]
    //   console.log(key)
    //   if (this.state.answerState[key] === SUCCESS) {
    //     return
    //   }
    // }
    // const question = this.state.quiz[this.state.activeQuestion]
    // const results = this.state.results
    // if (question.rightAnswerId === answerId) {
    //   if (!results[this.state.activeQuestion]) {
    //     results[this.state.activeQuestion] = SUCCESS
    //   }
    //   this.setState({
    //     answerState: { [answerId]: SUCCESS },
    //     results,
    //   })
    //   const timeout = window.setTimeout(() => {
    //     if (this.isQuizFinished()) {
    //       this.setState({
    //         isFinished: true,
    //       })
    //     } else {
    //       this.setState({
    //         activeQuestion: this.state.activeQuestion + 1,
    //         answerState: null,
    //       })
    //     }
    //     window.clearTimeout(timeout)
    //   }, 1000)
    // } else {
    //   results[answerId] = 'error'
    //   this.setState({
    //     answerState: { [answerId]: 'error' },
    //     results,
    //   })
    // }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.quize + ' ' + classes.error}>
        <div className='active'>
          <h1 className='text'>
            Ответьте на все вопросы теста и станьте специалистом
          </h1>
          {this.state.isFinished ? (
            <Finished results={this.state.results} quiz={this.state.quiz} />
          ) : (
            <ActiveQuize
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}
export default Quize
