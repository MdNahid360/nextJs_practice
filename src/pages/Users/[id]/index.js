import Navigation from '@/pages/component/Navigation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
const index = () => {
    const router = useRouter();
    const id = router.query.id;
    const {data, error} = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher)
    if (error) {
        return <h1 className="text-red-500 font-bold">Data Can't found</h1>
    }
    if (!data) {
        return <h1 className="text-white font-bold">Loading...</h1>
    }
    // const [user, setUser] = useState({});
    // useEffect(()=>{
    //     const id = router.query.id;
    //     const userData =async(id)=>{
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    //         setUser(await res.json());
    //     }
    //     userData(id);
    // },[router.query.id])
    return (
        <div align="center">
            <Navigation />
             <div className="border w-[600px] rounded-xl p-4 m-auto flex gap-3">
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                    alt="Alt text for the image"
                    width={190}
                    height={190}
                    className='rounded-xl'
                />
               <div className="" align="start">
                    <h1 className="text-4xl font-bold">{data.name}</h1>
                    <p className="mt-3">{data?.email}</p>
               </div>
             </div>

             <button className="bg-[#0b0b4670] px-3 py-2 border border-[#0084ff99] rounded text-[#5082ef] mt-6" onClick={() => router.back()}>Go to back </button>
        </div>
    );
};

export default index;