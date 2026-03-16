import React from 'react'

function ForgetPassword() {
  return (
    <div
    className='flex items-center justify-between px-1 my-2'
    style={{width:"376px",height:"20px"}}
    >
    <div style={{width:"143px", height:'20px'}}>

    <input
    type='checkbox'
    id='cb1'
    className='bg-blue-600'
    >
        
    </input>
    <label
    htmlFor='cb1'
    className='text-slate-900 ml-2'
    style={{fontSize:13, lineHeight:"20px"}}
    >
        Keep me logged in
    </label>
    </div>
    <div 
    style={{width:"199px", height:'20px',textAlign:"right",fontSize:13, lineHeight:"20px"}}
    className='text-slate-900 underline cursor-pointer hover:text-blue-600 active:text-blue-800'>
    <a>Forget Password?</a>
    </div>

    </div>
  )
}

export default ForgetPassword