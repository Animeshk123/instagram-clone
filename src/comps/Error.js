import React, { useEffect, useState } from 'react';

const Error = (props) => {
    const [show, setShow] = useState("hidden");
    useEffect(() => {
        setShow("flex");
        setTimeout(() => {
            setShow("hidden");
        }, 4000);
    }, [])

    return (
        <div className={`border-b-4 max-w-sm border-red-600 z-50 fixed top-10 right-10 bg-white py-3 rounded shadow-lg px-4 ${show} items-center`
        }>
            <span class="mr-2 text-red-600 material-symbols-outlined">
                priority_high
            </span>
            <p className='text-lightBlack'>{props.message}</p>
        </div>
    )
}

export default Error;