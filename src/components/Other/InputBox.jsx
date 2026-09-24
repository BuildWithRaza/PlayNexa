import React from 'react'

const InputBox = (props) => {
  return (
    <div>
      <input value={props.value} onChange={props.onChange} className='w-[350px]  h-[50px] border-2 bg-stone-200 py-2 border-stone-300 text-black placeholder:text-black placeholder:font-medium px-5 rounded-md' type={props.type} required={props.req}  placeholder={props.placeholder} />
    </div>
  )
}

export default InputBox;
