

import Signup from './Signup'
import Signin from './Signin'
import UserTable  from './Table'
import Appbar from './Appbar'
import AddCourse from './AddCourse'
import './App.css'
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";

function App() {
  //const [count, setCount] = useState(0)

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
            <Route path = "/addCourses" element={<AddCourse/>}/>
            <Route path = "/courses" element={<Courses/>}/>
            <Route path = "/course/:courseId" element={<Course/>}/>
            <Route path="/table" element={<UserTable users={[{name:'uma',age:50},{name:'uma1',age:51}]}/>} />
        </Routes>
    </Router>
    </div>

  )
}

export default App
