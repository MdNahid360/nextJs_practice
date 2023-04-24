import React, { useEffect, useState } from 'react';
import Navigation from '../component/Navigation';
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const user = () => {
      const [sUser, setSUser] = useState([]);
      const {data, error} = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

      if (error) {
        return <h1>Error happened!</h1>
      }
      if (!data) {
        return <h1>LOading....</h1>
      }
      console.log(data);
    // useEffect(()=>{
    //     // const allUsers= async()=>{
    //     //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //     //     setSUser(res.json())
    //     // }
    //     // allUsers();
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => setSUser(data))

    // },[])
    return (
        <div>
            <Navigation />
             <ul className="">
                {
                    data.map(user => <li className="mt-5">
                        <Link key={user?.id} className='bg-[#1550727d] p-2 w-[300px] ' href={`/Users/${user?.id}`} >{user?.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default user;