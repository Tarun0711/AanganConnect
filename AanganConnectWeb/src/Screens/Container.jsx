import React from 'react'
import Home from '../components/Home'
import Features from './Features'
import About from './About'
import Pricing from './Pricing'
import Contact from './Contact'
const Container = () => {
  return (
    <div>
        <Home/>
        <Features/>
        <About/>
        <Pricing/>
        <Contact/>
    </div>
  )
}

export default Container