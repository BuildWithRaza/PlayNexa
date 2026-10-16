import React from 'react'

const Button = (props) => {
    const bg={"background-color":props.bg,color:props.textColor}
  return (
    <div className=''>
      <button style={bg} className='w-[350px] h-[50px] font-semibold text-lg border-none rounded-md text-center'>{props.name}</button>
    </div>
  )
}

export default Button
