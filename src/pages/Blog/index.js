import React from 'react';
import Navigation from '../component/Navigation';
import Image from 'next/image';
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props : {
            data,
        }
    }
}
const blog = ({data}) => {
    return (
        <div className="p-3">
            <Navigation />
         

            <div className="grid grid-cols-4">
                <div className="">
                    blog page
                    <hr />
                                <h2 className="font-bold">Custom image :</h2>
                                <Image className='m-5 border-2 border-orange-500 rounded-lg' src='/demo.jpg' width="200" height="200"/>

                                <div className="h2 font-bold">URL image : </div>
                                <Image className='m-5 border-2 border-indigo-500 rounded-lg'  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  width="200" height="200"/>
                </div>
                <div className="col-span-3">
                    <h4 className="font-bold">Our blog : </h4>
                    <hr />
                                <div className="border-l p-3 grid grid-cols-2 gap-3">
                                    {
                                        data.slice(0, 5).map((bData)=>{
                                            return <div key={bData.id} className="bg-[#1e2f3e] p-3 flex gap-2 items-center relative">
                                                <h2 className="bg-[#559cf473] w-[40px] h-[40px] rounded-full flex justify-center items-center font-bold">{bData.id}</h2>
                                                <p>{bData.title}</p>
                                                <Link href={`/Blog/${bData.id}`} className="float-left bg-[blue] px-4 py-1 rounded-lg absolute right-3 bottom-2">Read</Link>
                                            </div>
                                        })
                                    }
                                </div>
                </div>
            </div>           
        </div>
    );
};

export default blog;