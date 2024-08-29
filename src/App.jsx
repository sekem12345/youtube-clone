import React, { useState } from 'react'
// import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './placea/home/Home'
import Video from './placea/video/Video'

const App = () => {

const [sidebar,setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    
      
    </div>
  )
}

export default App