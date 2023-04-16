import { useRouter } from 'next/router';
import React from 'react';
import Navigation from '../component/Navigation';
export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const paths = data.map((blg) => {
        return {
            params: {bloginfo : blg.id.toString(),
            }
        }
    })
    return{
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.bloginfo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return {
        props : {
            data,
        }
    }
}
const blogDetails = ({ data }) => {
    // const router = useRouter();
    // const pNo = router.query.blogDetails;
    return (
        <div className="p-5">
            <Navigation />
            <h1 className="text-4xl text-blue-500">{data.title} </h1>
            <small>Blog no : {data.id}</small>
            <p className="mt-4">{data.body}</p>
        </div>
    );
};

export default blogDetails;