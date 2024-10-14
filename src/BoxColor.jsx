import React from 'react'

const BoxColor = ({ color }) => {
  console.log(color)
  return (
    <div>
      <div style={{ margin: '.5rem', backgroundColor: `${color}` }} className="boxBg">
      </div>
    </div >
  )
}

export default BoxColor
