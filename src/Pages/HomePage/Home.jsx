import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import MainCarus from '../../Components/Carusel/MainCarus'
import Informator from '../../Components/Informator/Informator'
import Options from '../../Components/Options/Options'
import Product from '../../Components/Prodoct/Product'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <MainCarus/>
        <Informator/>
        <Options/>
        <Product/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home