import React from 'react'

export default function Button() {
const [color,setColor]=React.useState('blue')
const onClick=()=>{
    color==='blue'?setColor('red'):setColor('blue')
}

return (
    <button onClick={onClick} style={{ backgroundColor:`${color}` }}>sign-in</button>
  )
}
