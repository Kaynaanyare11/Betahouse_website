import { useState } from 'react'
import Homepage from './assets/Components/Pages/Homepage'
import About from './assets/Components/Pages/About'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className='bg-slate-50 h-screen'>
<Routes>
<Route path='/' element={<Homepage/>}/>
 <Route path='about' element={<About/>}/>


</Routes>

    </div>
  )
}

export default App
