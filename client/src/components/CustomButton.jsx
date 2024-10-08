import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomButton({ to, className, children, ...rest }) {
    return (
        <>
            <button className='h-10 w-10 items-center pr-0.5 justify-center flex font-sans text-3xl bg-[#00ed64] shadow shadow-crisp-black hover:shadow-crisp-black-press hover:ml-[2.5px] hover:bg-gradient-0 rounded-full border-2 border-black'>
                <NavLink
                    to={to}
                    className={`${className}`}
                    {...rest}
                >
                    {children}
                </NavLink>
            </button>
        </>
    )
}

export default CustomButton