import React from 'react'
import Topbar from './Topbar'
import Hero from './Hero'
import Events from './Events'
import Features from './Features'
import ContactUs from './ContactUs'
import Footer from './Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <Topbar/>
      <Hero/>
      <Events/>
      <Features/>
      <ContactUs/>
      <Footer/>   
    </div>
  )
}

export default Index
