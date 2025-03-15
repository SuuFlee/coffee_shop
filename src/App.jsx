import { useState } from 'react'

import AllMain from './main/allMain'
import Description from './containerOne/description'
import SpisokCup from './containerOne/spisokCup'
import Argument from './containerOne/argument'
import First from './containerTwo/first'
import Sliderr from './containerTwo/slider'
import Footer from './footer/footer'






function App() {

  return (
    <>
    <header>
      <AllMain />
    </header>
    <div>
        <Description/>
        <SpisokCup />
        <Argument />
        <First />
        <Sliderr />
    </div>
    <footer>
      <Footer  />
    </footer>
    </>
  )
}

export default App
