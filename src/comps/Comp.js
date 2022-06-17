import React from 'react'

const comp = (props) => {
    return (
        <div className='rounded-lg bg-lightBlack p-3 mb-4' key={1}>
            <h1 className='capitalize font-bold'>{props.Author}</h1>
            <p className="capitalize">{props.text}</p>
        </div>
    )
}

export default comp