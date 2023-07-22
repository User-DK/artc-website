import React from 'react'
import Navbar from './components/nav/Navbar'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Teams from './components/teams/Teams'
import Events from './components/events/Events'
import Members from './components/members/Members'
import Staff from './components/staff/Staff'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Navbar/>
        <Landing/>
        <About/>
        <Teams/>
        <Events/>
        <Members/>
        <Staff/>
        <Experience/>
        <Footer/>
    </>
  )
}

export default App