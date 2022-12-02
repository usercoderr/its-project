import React from 'react'
import Support from '../features/Support'
import Footer from './footer/Footer'
import Header from './header/Header'

import Main from './Main/Main'

export default function Layout() {
  return (
    <div className='page'>
        <Header/>
        <Main/>
        <Footer/>
        <Support/>
    </div>
  )
}
