import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navigation from './component/Navigation'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const route = useRouter();
  const handleSubmit =()=>{
      route.push('/Blog')
  }
  useEffect(()=>{
     setTimeout(()=>{
        route.push('/')
     }, 3000)
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-2">
      <Head>
          <title>Next project</title>
            <meta charset="UTF-8" />
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="HTML, CSS, JavaScript, next js" />
            <meta name="author" content="Md Nahid"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
    <Navigation />
     
     <h1 className="text-center text-6xl font-bold">Hello world</h1>
    </main>
  )
}
