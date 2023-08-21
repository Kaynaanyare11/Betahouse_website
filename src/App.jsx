import { useState } from 'react'
import Homepage from './assets/Components/Pages/Homepage'
import About from './assets/Components/Pages/About'
import Footer from './assets/Components/Shared/footer'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className='bg-white'>
<Routes>
<Route path='/' element={<Homepage/>}/>
 <Route path='about' element={<About/>}/>


</Routes>
<Footer/>

    </div>
  )
}

export default App
