import React from 'react'

function Button(props) {
  return (
    <>
        <button className='bg-[#1C4532] text-[#F7FAFC] text-xl p-3 rounded-xl hover:bg-[#173829] transition duration-300 cursor-pointer' {...props}>
            {props.text}
        </button>
    </>
  )
}

export default Button
 