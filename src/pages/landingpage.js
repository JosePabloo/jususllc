import React, { Component } from 'react'
import HideAppBar from '../components/header/bar'

export default class LandingPage extends Component {
    render() {
      return (
        <div>
            <HideAppBar></HideAppBar>
            <h1>hello</h1>
        </div>
      )
    }
  }