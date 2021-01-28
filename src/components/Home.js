import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
return(
  <div >
    <Link to="/reactjs">
        <h1>React js Course</h1>
    </Link>
    <Link to="nodejs">
        <h1>Node js Course</h1>
    </Link>
  </div>
)
}

export default Home