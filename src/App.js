import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home'
import Course from './components/CourseStucture'

function App(){
return(
  <div className="App">
    <Router>
      <Route exact path="/" component={Home}  />
      <Route path="/:coursename" component={Course}  />
    </Router>
  </div>
)
}

export default App