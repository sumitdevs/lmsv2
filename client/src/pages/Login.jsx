import {useState, useEffect} from 'react'
import {toast, Toaster } from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {login, isAuthenticated} = useAuthStore();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  useEffect(()=>{
    if(isAuthenticated)
      navigate('/');
  },[isAuthenticated])
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {success,error} = await login({email,password});
    if(success){
      const from = location?.state?.from || '/courses'
      navigate(from, {replace:true});
      toast.success('login success',{position: 'bottom-left'});
    } else {
      toast.error(error,{ position:"bottom-left" });
    }
  }
  return (
    <>
      <section id="breadcrumb" className='h-14 mt-20 bg-[var(--clr-accent-100)]'>
        <nav aria-label='Breadcrumb' className='container flex items-center h-full text-[var(--clr-primary-900)]'>
          <ol className='flex gap-x-1 '>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">›</li>
            <li><a className='text-[var(--clr-accent-900)]' href="/login">Login</a></li>
          </ol>
        </nav>
      </section>

      <section id='loginform' className='mt-16 mb-22'>
        <div id="form-wrapper" className='container text-[var(--clr-primary-900)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-28 items-center'>
            <div className='flex flex-col gap-y-6 w-full md:max-w-[26rem] md:ml-auto'>
              <div>
                <h2>Welcome Back</h2>
                <p className='text-[var(--clr-primary-400)]'>Your learning journey starts here.</p>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)]' name='email' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)] ' name='password' type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} required />
                <div className='flex justify-between items-center'>
                  <label>
                    <input type="checkbox" name="remember" />
                    &nbsp;Remember me
                  </label>
                  <a className='text-[var(--clr-accent-900)]' href="#">Forget Password?</a>
                </div>
                <input className='h-12 rounded-lg text-white px-4 bg-[var(--clr-accent-900)]' type="submit" value="Login" />
              </form>
              <div className='flex items-center gap-x-1 text-[var(--clr-primary-400)] justify-between'>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]' />
                <span >or continue</span>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]'  />
              </div>
              <a className='h-12  rounded-lg px-4 border border-[var(--clr-primary-200)] flex items-center justify-center gap-x-2 ' href="#"><img src="/icons/google.svg" alt="" />Log in with google</a>
            </div>
            <div className='hidden md:block'>
              <img src="/images/login.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Toaster/>
    </>
  )
}

export default Login