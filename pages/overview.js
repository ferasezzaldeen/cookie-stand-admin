import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Overview() {
    return (
        <div className="flex flex-col justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
            <p>hola from overview page</p>
            <Link href="/"><a>Return to Main page</a></Link>
        </main>
        
        
       
      </div>
    )
}