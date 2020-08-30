import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout.js'
import Quize from './components/Quize/Quize.js'
class App extends Component {
  render() {
    return (
      <Layout>
        <Quize />
      </Layout>
    )
  }
}

export default App
