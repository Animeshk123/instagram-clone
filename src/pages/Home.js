import { useEffect } from 'react';
import posts from '../Posts';
import Card from '../comps/Card';

const Home = (props) => {
    useEffect(() => {

        props.load(100);

    }, [])
    return (
        <>
            <div className='container mx-auto px-4 flex flex-wrap'>
                {posts.map(post => {
                    return <Card keyid={post.id} id={post.code} caption={post.caption} likes={post.likes} img={post.display_src} />
                })}
            </div>
        </>
    )
}

export default Home