import React from 'react'

const ScreenOne = (props) => {
  return (
    <div>
        <div>FirstName : {props.firstName}</div>
        <div>LastName : {props.lastName}</div>
        <div>Photo Graph</div>
        <div><img src={props.image} /></div>
    </div>
  )
}

export default ScreenOne