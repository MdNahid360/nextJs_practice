import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navigation = () => {
     const route = useRouter();
  const handleSubmit =()=>{
      route.push('/Blog')
  }

    return (
        <div>
              <nav className='w-full flex justify-between'>
      <h3 className='font-bold text-lg'>LOGO</h3>

      <ul className="flex items-center gap-8">
          <li>
              <Link href="/">
                 <p>Home</p>
              </Link>
          </li>
          <li>
              <Link href="/Blog">
                 <p>Blog</p>
              </Link>
          </li>
          <li>
              <Link href="/doc">
                 <p>Doc</p>
              </Link>
          </li>
          <li>
              <button onClick={handleSubmit} className="px-6 rounded-md py-2 bg-red-400 ">Get Start</button>
          </li>
      </ul>
   </nav>
        </div>
    );
};

export default Navigation;