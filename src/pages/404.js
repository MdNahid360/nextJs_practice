import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
    const router = useRouter();
    const handleBack = () =>{
        router.replace('/')
    }
//  useEffect(()=>{
//      setTimeout(()=>{
//         router.push('/')
//      }, 3000)
//   },[])
    return (
        <div>
            <h1 className="text-6xl font-bold text-center my-auto">404</h1>
            <p className='text-center text-lg'>Page is not found!!!</p>
            <button onClick={handleBack} className="bg-indigo-400 px-4 py-2 m-auto rounded-lg">Go to home</button>
        </div>
    );
};

export default ErrorPage;