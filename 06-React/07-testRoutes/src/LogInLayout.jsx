import React from 'react'
import { LogInFoot, LogInHead } from './components/index'
import { Outlet } from 'react-router'

function LogInLayout() {
    return (
    <>
    <LogInHead />
    {/* <LogInForm /> */}
    <Outlet/>
    <LogInFoot />

    </>
)
}

export default LogInLayout