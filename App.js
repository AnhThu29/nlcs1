import axios from 'axios'
import React, { Component } from 'react'
import { createAppContainer} from 'react-navigation'
import AppNavigator from './AppNavigator'
const AppContainer = createAppContainer(AppNavigator)
axios.defaults.baseURL='http://192.168.88.104:2929'
export default class App extends React.Component {
  render(){   
    return (
      <AppContainer/>
    )
  }
}