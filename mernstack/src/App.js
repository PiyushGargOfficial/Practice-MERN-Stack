import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Register from './Components/Register'
import { Navbar } from './Components/Navbar'
import {Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </>
  )
}

export default App
