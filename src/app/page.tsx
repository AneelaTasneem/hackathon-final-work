import React from 'react'

import TopHeader, { Header } from './Components/Header'
import Footer from './Components/Footer'
import AboutSection from './Components/About'


const page = () => {
  return (
    <div >
      <TopHeader />
      <Header />
      <AboutSection />
       <Footer />
    </div>
  )
}

export default page
