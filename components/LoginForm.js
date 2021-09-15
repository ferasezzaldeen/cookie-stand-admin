export default function LoginForm({login}) {

    function handleLogin(event){
        event.preventDefault()
        let username=event.target.username.value
        let password=event.target.password.value
        console.log(username,password)
        login(username,password)
    }
    
    return (
        <div className='max-w-4xl mx-auto'>
            <form className='flex flex-col items-center bg-green-300 border border-black h-72 -6 rounded-2xl'  onSubmit={handleLogin} >
               
                <label>User Name</label>
                <input type="text" name='username' className='w-9/12 my-3 bg-gray-200' placeholder={'USER NAME'}  ></input>
                <label>Password</label>
                <input type="text" name='password' className='w-9/12 my-3 bg-gray-200' placeholder={'PASSWORD'} ></input>
                <button className='py-4 bg-green-400 p-80 mt-7' type="submit "  >SIGN IN</button>
                
             </form>
        </div>
    )
        
}