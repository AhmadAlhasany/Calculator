import React from 'react'

function Button(props) {
  return (
    <div className={`button rf ${props.c}`} onClick = {props.onClick}>
        <p>{props.value}</p>
    </div>
  )
}

export default Button