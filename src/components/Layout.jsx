import React, { useState } from 'react'
import Support from '../features/Support'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './Main/Main'


export default function Layout() {
  const [isOpen, setOpen] = useState(true);
  const handleClickModal = () => {
    setOpen(!isOpen)
  }
  return (
    <div onClick={handleClickModal} className='page'>
      <Header />
      <Main />
      <Footer />
      <Support isOpen={isOpen} setOpen={setOpen} onClick={handleClickModal} />
    </div>
  )
}
