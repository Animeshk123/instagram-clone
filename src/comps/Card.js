import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import comments from '../com';


const Card = (props) => {
    const [show, setShow] = useState("opacity-0");
    const [comment, setComment] = useState([]);
    const [count, setCount] = useState(Number(props.likes));
    const handlelike = () => {
        setShow("");
        setTimeout(() => {
            setShow("opacity-0");
        }, 500);
        setCount(count + 1);
    }

    useEffect(() => {
        for (const key in comments) {
            if (key == props.id) {
                setComment(comments[key]);
            }
        }
    }, [])
    return (
        <>

            <div className='mb-6 shadow-lg w-full max-w-sm rounded-lg mx-auto pb-6 bg-white relative' key={props.keyid}>
                <NavLink to={`/post/info/${props.id}`}>
                    <img className='bg-lightBlack rounded-tl-lg rounded-tr-lg h-72 w-full object-cover object-center' src={props.img} />
                    <div className={`${show} transition-all absolute h-72 w-full bg-Black top-0 rounded-tl-lg rounded-tr-lg flex items-center justify-center`}>
                        <span className="text-9xl text-white material-symbols-outlined">
                            favorite
                        </span>
                    </div>
                    <h1 className='capitalize text-center mt-4 px-4 text-xl font-bold'>{props.caption}</h1>
                    {/* <p className='text-center mt-4 px-4 text-lightBlack'>Cleaned my office and mounted my recording gear overhead. Stoked for 2016!
                        Cleaned my office and mounted my recording gear overhead. Stoked for 2016!
                    </p> */}
                </NavLink>
                <div className='flex items-center mt-6 w-full mx-auto px-4 flex-col'>
                    <button onClick={handlelike} type='button' className='hover:bg-gray-900 hover:text-white w-full border-2 flex items-center justify-center mt-4 py-2 rounded cursor-pointer'>
                        <span className="material-symbols-outlined mr-2">
                            favorite
                        </span>
                        {count}
                    </button>
                    <NavLink to={`/post/info/${props.id}`} className="block w-full">
                        <button type='button' className='w-full border-2 flex items-center justify-center mt-4 py-2 rounded cursor-pointer hover:bg-gray-900 hover:text-white'>
                            <span className="material-symbols-outlined mr-2">
                                mode_comment
                            </span>
                            {comment.length}
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Card;