import Link from 'next/link'
import { useAuth } from '../contexts/auth'
export default function Header() {
    const { user, login, logout } = useAuth();
    return (
        <header className="flex justify-between -mt-2 bg-green-500 py-7">
            <h1 className="ml-6 text-5xl font-bold font-weight: 900">Cookie Stand Admin</h1>
           
            <ul className='flex row-auto'>
                <li className='mr-5 '>
                    <Link href="/">
                    <a>Home</a>
                    </Link>
                </li>
               
                <li className='mr-2 '>
                    <Link href="/overview">
                    <a>overview</a>
                    </Link>
                </li>
                <li className='mr-2 '>
                    <button onClick={logout}>SIGN OUT</button>
                </li>
            </ul>
            
        </header>
    )
}