import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <h1 className='text-9xl font-bold text-center mt-24'>404</h1>
            <p className='text-center'>This Page Doesn't Exist ..</p>
            <NavLink to="/" className="flex items-center">
                <button className='mx-auto mt-6 py-3 px-4 bg-gray-900 text-white rounded-lg' type='button'>Go Back</button>
            </NavLink>
        </>
    )
}

export default Error