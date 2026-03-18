import React from 'react'

export default function ForgetPassword({ linkTo, linkText }) {
  return (
    <div
    className='flex items-center justify-between px-1 '
    style={{width:"376px",height:"20px"}}
    >
    <div style={{width:"180px", height:'20px', display: 'flex', alignItems: 'center'}}>

    <input
    type='checkbox'
    id='cb1'
    className='bg-blue-600'
    />
    <label
    htmlFor='cb1'
    className='text-slate-900 ml-2'
    style={{fontSize:13, lineHeight:"20px"}}
    >
        Keep me logged in
    </label>
    </div>
    <div 
    style={{width:"180px", height:'20px',textAlign:"right",fontSize:13, lineHeight:"20px"}}
    className='text-slate-900 underline cursor-pointer hover:text-blue-600 active:text-blue-800'>
    <a href={linkTo}>{linkText}</a>
    </div>

    </div>
  )
}