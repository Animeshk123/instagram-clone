import { useState, useEffect } from 'react';
import Comp from '../comps/Comp';
import { useParams } from 'react-router-dom';
import comments from '../com';
import posts from '../Posts';

const Info = (props) => {
  const [data, setData] = useState({});
  const [comment, setComment] = useState([]);
  const [count, setCount] = useState();

  const [show, setShow] = useState("opacity-0");
  const handlelike = () => {
    setShow("");
    setTimeout(() => {
      setShow("opacity-0");
    }, 500);
    console.log(count);
    setCount(count + 1);
  }
  const { id } = useParams();

  useEffect(() => {
    let mainData = posts.filter(post => {
      if (post.code == id) {
        return post;
      }
    });
    for (const key in comments) {
      if (key == id) {
        setComment(comments[key]);
      }
    }
    setData(mainData[0]);
    setCount(Number(mainData[0].likes));
    props.load(100);
  }, [])


  return (
    <>
      <div className='h-full w-full container mx-auto px-4 flex items-center justify-center mb-12'>
        <div className='sm:w-4/5 w-full shadow-lg bg-white p-4 mt-6 rounded-lg flex sm:flex-row flex-col justify-center sm:space-x-6'>
          <div className='sm:w-1/2 w-full text-center relative'>
            <img className='bg-lightBlack rounded-lg mx-auto w-full h-96 object-cover object-center' src={data.display_src} />
            <div className={`${show} transition-all absolute h-96 w-full bg-Black top-0 rounded-tl-lg rounded-tr-lg flex items-center justify-center`}>
              <span className="text-9xl text-white material-symbols-outlined">
                favorite
              </span>
            </div>
            <h1 className='capitalize mt-4 text-xl font-bold'>{data.caption}</h1>
            {/* <p className='mt-4 text-lightBlack'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p> */}
            <div className='pb-4 flex items-center mt-6 w-full mx-auto px-4 flex-row space-x-6'>
              <button onClick={handlelike} type='button' className='hover:bg-gray-900 hover:text-white w-full border-2 flex items-center justify-center mt-4 py-2 rounded cursor-pointer'>
                <span className="material-symbols-outlined mr-2">
                  favorite
                </span>
                {count}
              </button>
              <button type='button' className='w-full border-2 flex items-center justify-center mt-4 py-2 rounded cursor-pointer hover:bg-gray-900 hover:text-white'>
                <span className="material-symbols-outlined mr-2">
                  mode_comment
                </span>
                {comment.length}
              </button>
            </div>
          </div>
          <div className='sm:w-1/2 w-full overflow-auto sm:mt-0 mt-6'>
            {comment.map(c => {
              return <Comp Author={c.user} text={c.text} />
            })}
            <div className='mt-6'>
              <input type="text"
                className='border-2 block w-full rounded max-w-sm border-gray-900 py-3 px-4 outline-none'
                placeholder="Author Name"
              />
              <input type="text"
                placeholder='Comment'
                className='border-2 block w-full rounded max-w-sm border-gray-900 py-3 px-4 outline-none mt-6' />
              <button className='mt-6 py-3 px-4 bg-gray-900 text-white rounded-lg' type='button'>Post Comment</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Info
