import React from 'react'
import './Quize.css'
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'

class Quize extends React.Component {
  state = {
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
    ],
  }

  onAnswerClickHandler = (answerId) => {
    if (this.setState.answerState) {
      const key = Object.key(this.state.answerState)[0]
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success' },
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          // console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: { [answerId]: 'error' },
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className='quize'>
        <div className='active'>
          <h1 className='text'>Ответьте на все вопросы</h1>
          <ActiveQuize
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}
export default Quize

// {
//   state = {
//     activeQuestion: 0,
//     answerState: null,
//     quiz: [
//       {
//         question: 'Какого цвета небо?',
//         rightAnswerId: '2',
//         id: 1,
//         answers: [
//           { text: 'Чёрный', id: 1 },
//           { text: 'Синий', id: 2 },
//           { text: 'Красный', id: 3 },
//           { text: 'Жёлтый', id: 4 },
//         ],
//       },
//       {
//         question: 'В каком году основали Санкт-Петербург?',
//         rightAnswerId: '3',
//         id: 2,
//         answers: [
//           { text: '1700', id: 1 },
//           { text: '1705', id: 2 },
//           { text: '1703', id: 3 },
//           { text: '1803', id: 4 },
//         ],
//       },
//     ],
//   }
//   onAnswerclickHandler = (answerId) => {
//     const question = this.state.quiz[this.state.activeQuestion]
//     if (question.rightAnswerId === answerId) {
//       this.setState({
//         answerState: { [answerId]: 'success' },
//       })

//       const timeout = window.setTimeout(() => {
//         if (this.isQuizeFinished()) {
//           console.log('Finished')
//         } else {
//           this.setState({
//             activeQuestion: this.state.activeQuestion + 1,
//             answerState: null,
//           })
//         }

//         window.clearTimeout(timeout)
//       }, 1000)
//     } else {
//       this.setState({
//         answerState: { [answerId]: 'error' },
//       })
//     }
//   }

//   isQuizeFinished() {
//     return this.state.activeQuestion + 1 === this.state.quiz.length
//   }
