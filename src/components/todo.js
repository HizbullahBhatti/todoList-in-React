import React from 'react'
import './style.css'
const todo = () => {
  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="Image not found" />
                <figcaption>Add your List here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='Add Items ... ' className='form-control'/>
                <i className="fa fa-plus add-btn"></i>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default todo