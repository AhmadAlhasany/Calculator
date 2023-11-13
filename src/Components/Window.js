import React from 'react'

function Window(props) {
  return (
    <div className='window rf'>
      <div className='fix'></div>  <p>{props.value || 0}</p>
    </div>
  )
}

export default Window