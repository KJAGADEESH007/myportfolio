import React from 'react'
import "./Content.scss"
import { useNavigate } from 'react-router-dom';



const Content = () => {
  const navigate = useNavigate();
  return (
   <div className='content'>
    <div>
 <h1>
    Hello, I am Jagadeesh
    </h1>
    <p>MCA Graduate</p>
    <button  onClick={() => navigate('/Projects')}>View My Work</button>
    </div>
    </div>
  )
}

export default Content