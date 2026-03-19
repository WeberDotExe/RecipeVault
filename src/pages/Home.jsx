import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col gap-20 sm:gap-10'>
     <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default Home