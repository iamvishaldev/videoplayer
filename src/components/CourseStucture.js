import React,{useState} from 'react'

function Course(props){
    
  const courseName = props.match.params.coursename


  const courses = {
    reactjs:[
      {title:'react js title 1',vid:'edblCnJhvdI'},
      {title:'react js title 2',vid:'MXZvQuG5mQc'},
      {title:'react js title 3',vid:'VPIrZr8YVrQ'},
    ],
    nodejs:[
      {title:'node js title 1',vid:'4-B0FMNitz8'},
      {title:'node js title 2',vid:'F-i0d67PVkE'},
      {title:'node js title 3',vid:'R1IDMzKSmMc'},
      
    ]
  }



  const [vid,uid] = useState(courses[courseName][0].vid)
  const [title,utit] = useState(courses[courseName][0].title)



  const renderVideo = ()=>{
    return(
      <>
      <h1>{title}</h1>
      <div className="video-container">
        <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
      </div>
      </>
        
    )
  }

  


return(
  <div >
   {renderVideo()}
    {<div class="collection">
    {
      courses[courseName].map(item=>{
        return (
          <a href="#!" className="collection-item" onClick={()=>{
            uid(item.vid)
            utit(item.title)
          }}>{item.title}</a>
        )
      })
    }
  </div>} 
  </div>
)
}

export default Course