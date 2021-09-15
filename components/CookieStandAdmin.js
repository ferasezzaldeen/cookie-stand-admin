import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../contexts/auth'
import ReportTable from '../components/ReportTable'
import Link from 'next/link'
import { useReducer } from 'react'
export default function CookieStandAdmin({Branches,onCreate,max,min,avg,location, loading}) {
    const { user, login, logout } = useAuth();
    return (
        <div className="flex flex-col justify-center min-h-screen py-2">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header></Header>
          <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
            
           <div>
               
             <form className='p-6 bg-green-300 rounded-2xl' onSubmit={onCreate} >
               <h2>Create Cookie Stand</h2>
                <label>location</label>
                <input type="text" name='location' className='w-9/12 my-3 bg-gray-200' placeholder={location} ></input>
                <div className='flex flex-row'>
                    <div className='flex flex-col p-3'>
                        <label>Minimum customer per Hour</label>
                        <input type="number" name='min'  className='bg-gray-200'placeholder={min} ></input>
                    </div>
                    <div className='flex flex-col p-3'>
                        <label>Maximum customer per Hour</label>
                        <input type="number" name='max' className='bg-gray-200' placeholder={max} ></input>
                    </div>
                    <div className='flex flex-col p-3'>
                        <label>Avarage Cookies per sale</label>
                        <input type="number" name='avg'   className='bg-gray-200' step='.1' placeholder={avg}></input>
                    </div>
                    <div className='flex flex-col px-3 '>
                       <button className='px-8 py-4 bg-green-400' type="submit" >create</button>
                    </div>
                </div>
                {Branches.length?
                <ReportTable hours={['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']} loading={loading} reports={Branches}>
                  
                </ReportTable>
                 : <h2>No Cookie Stands Available</h2>
                }
                
             </form>
           </div> 
          </main>
          <Footer Branches={Branches}></Footer>
         
        </div>
      )
}