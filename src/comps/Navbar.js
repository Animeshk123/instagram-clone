import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='container mx-auto px-4 py-2 flex items-center justify-center'>
                <NavLink to='/'>
                    <img className='h-24 object-contain' src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt='logo' />
                </NavLink>
            </div>
        </>
    )
}

export default Navbar;