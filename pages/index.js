import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth'
import LoginForm from '../components/LoginForm'
import useResource from '../hooks/useResource'
import { useEffect, useState } from 'react'
export default function Home() {
  const [location,setlocation]=useState('')
  const [min,setmin]=useState(0)
  const [max,setmax]=useState(0)
  const [avg,setavg]=useState(0)
  const[Branches, setBranch]=useState([])
  function onCreate(event){
    event.preventDefault()
    const Branche={
      location:event.target.location.value,
      hourly_sales:[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      minimum_customers_per_hour : event.target.min.value,
      maximum_customers_per_hour : event.target.max.value,
      average_cookies_per_sale : event.target.avg.value,
    }
    createResource(Branche)
    
    setlocation(()=>{
      return Branche.location
    })
    setmin(()=>{
      return Branche.minimum_customers_per_hour
    })
    setmax(()=>{
      return Branche.maximum_customers_per_hour
    })
    setavg(()=>{
      return Branche.average_cookies_per_sale
    })
    setBranch((Branches)=>{
      return resources
    });
    




  }
 
  
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource , } = useResource(); 


  useEffect(() => {
    if (resources){
     setBranch( resources)
    }
    console.log('hello');
  }, [resources,Branches])
  return (
    <div>
      {user? <CookieStandAdmin Branches={Branches} username={user.username} onCreate={onCreate} location={location} min={min} max={max} avg={avg} loading={loading}></CookieStandAdmin> 
      : <LoginForm login={login}></LoginForm>}
    </div>
  )
}


