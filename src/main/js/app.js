import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Component/Navigation'
import Home from './Component/Home'
import User from './Component/User'
import Kh from './Component/Kh'
import Client from './Component/Client'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/kh" component={Kh}/>
                <Route path="/client" component={Client}/>
            </Switch>
        </div>
    </BrowserRouter>
    )
  }
}

export default App
ReactDOM.render(<App/>,document.getElementById("root"));