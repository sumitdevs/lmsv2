import React from 'react'
import logo from '../../../assets/gir-logo.svg'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='w-64 fixed top-0 left-0 h-screen z-20 bg-white pb-24'>
        <div className='flex h-full  gap-y-6 flex-col mt-10 '>
            <div className="px-12 py-5 border-b-2 border-[var(--clr-primary-100)] ">
                <Link  to="/dashboard"><img  src={logo} alt="" /></Link>
            </div>
            <nav className='flex justify-between flex-col h-full text-[var(--clr-primary-200)]'>
                <ul className='flex flex-col gap-y-6'>
                    <li>
                        <Link className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1' to="/dashboard">
                            <svg className="h-6 w-6 fill-current ">
                            <use href="./icons/sidebar.svg#dashboard"></use>
                            </svg>
                            Dashboard
                        </Link>
                    </li>
                        <li>
                        <Link className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1' to="/my-courses">
                            <svg className="h-6 w-6 fill-current ">
                            <use href="./icons/sidebar.svg#cources"></use>
                            </svg>
                            Courses
                        </Link>
                    </li>
                        <li>
                        <a className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1' href="">
                            <svg className="h-6 w-6 fill-current ">
                            <use href="./icons/sidebar.svg#group"></use>
                            </svg>
                            Group
                        </a>
                    </li>
                        <li>
                        <a className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1' href="">
                            <svg className="h-6 w-6 fill-current ">
                            <use href="./icons/sidebar.svg#assignment"></use>
                            </svg>
                            Assignment
                        </a>
                    </li>
                        <li>
                        <a className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1' href="">
                            <svg className="h-6 w-6 fill-current ">
                            <use href="./icons/sidebar.svg#quiz"></use>
                            </svg>
                            Quiz
                        </a>
                    </li> 
                </ul>
                <button className='flex active:bg-[var(--clr-accent-100)] hover:bg-[var(--clr-accent-100)] hover:text-[var(--clr-accent-900)] hover:border-r-4 active:border-r-4 border-[var(--clr-accent-900)] active:text-[var(--clr-accent-900)] items-center gap-x-4 px-12 py-1'>
                    <svg className="h-6 w-6 fill-current ">
                        <use href="./icons/sidebar.svg#logout"></use>
                    </svg>
                    Logout
                </button>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar