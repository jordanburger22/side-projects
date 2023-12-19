import { useState, useEffect } from 'react'
import './App.css'
import NewMemeForm from './common/components/NewMemeForm'
import Header from './common/components/Header'
import MemeList from './common/components/MemeList'
import Footer from './common/components/Footer'

function App() {


  return (
    <>
      <Header />
      <NewMemeForm />
      <MemeList />
      <Footer />
    </>
  )
}

export default App
