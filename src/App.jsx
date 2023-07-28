import { useState } from 'react'

import Signup from './Signup'
import Signin from './Signin'
import Appbar from './Appbar'
import AddCourse from './AddCourse'
import './App.css'
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <div style = {{
  //     width:"100vw",
  //     height:"100vh",
  //     background:"#eeeeee"
  // }}>
  //   <Appbar></Appbar>
  //   {/* <Signup></Signup> */}
  //   <Signin></Signin>
    
  //   </div>
  // )

  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      background:"#eeeeee"
    }}>
    
    <Router>
    <Appbar/>
        <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path ="/signup" element={<Signup />}/>
            <Route path = "/addCoures" element={<AddCourse/>}/>
        </Routes>
    </Router>
    </div>

  )
}

export default App
