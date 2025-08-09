import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const {signup} = useAuthStore();
  const [name,setName] =useState();
  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  const [confirmPassword,setConfirmPassword] =useState();
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {success, error} = await signup({name,email,password,confirmPassword});
    if(success){
      navigate('/login');
      toast.success('register successfully');
    }else{
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
            <li><a className='text-[var(--clr-accent-900)]' href="/signup">Sign up</a></li>
          </ol>
        </nav>
      </section>
      <section id='loginform' className='mt-16 mb-22'>
        <div id="form-wrapper" className='container text-[var(--clr-primary-900)]'>
          <div className='flex gap-16 justify-center items-center'>
            <div className='flex flex-col gap-6 w-lg'>
              <div>
                <h2>Create Your  Account</h2>
                <p className='text-[var(--clr-primary-400)]'>Join GIR Technologies  and start learning today.</p>
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)]' name='name' type="text" placeholder='Full Name' onChange={(e)=>setName(e.target.value)} required />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)]' name='email' type="email" placeholder='Email'  onChange={(e) => setEmail(e.target.value)} required />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)] ' name='password' type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} required />
                <input className='border outline-none h-12 rounded-lg px-4 text-gray-600 border-[var(--clr-primary-200)] ' name='confirmpassword' type="password" placeholder='Confirm Password'  onChange={(e) => setConfirmPassword(e.target.value)} required />
                <div className='flex justify-between items-center'>
                  <label>
                    <input type="checkbox" name="remember" />
                    &nbsp;Remember me
                  </label>
                  <a className='text-[var(--clr-accent-900)]' href="#">Forget Password?</a>
                </div>
                <input className='h-12 rounded-lg cursor-pointer  text-white px-4 bg-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-1000)] ' type="submit" value="Sign up" />
              </form>
              <div className='flex items-center gap-x-1 text-[var(--clr-primary-400)] justify-between'>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]' />
                <span >or continue</span>
                <hr className='border-t flex-grow border-[var(--clr-primary-200)]'  />
              </div>
              <a className='h-12  rounded-lg px-4 border border-[var(--clr-primary-200)] flex items-center justify-center gap-x-2 ' href="#"><img src="/icons/google.svg" alt="" />Log in with google</a>
            </div>
            <div className='hidden min-[900px]:block'>
              <img src="/images/signupimg.svg" alt="signup_img" />
            </div>
          </div>
        </div>
      </section>
      <Toaster position='bottom-left' />
    </>
  )
}

export default Signup