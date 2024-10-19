import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_img from '../../assets/profile_img.png'

import mobileLogo from '../../assets/Netflix-Symbol.png'
import React,{useRef, useState,useContext} from 'react';
import { logout } from '../../firebase';

import { useNavigate } from 'react-router-dom';




function Navbar(){
    const [menuMove,setMenuMove] = useState(false);
    const menuRef = useRef()
    const navBarRef = useRef();

    const navigate= useNavigate()


    window.addEventListener('scroll',()=>{
        if(window.scrollY>80)
        {
            navBarRef.current.style.backgroundColor="rgb(23,23,23)"
        }
        else
        {
            navBarRef.current.style.backgroundColor="transparent"
        }
    })

    function menuDisplay(){
        if(menuMove)
        {
            
            setMenuMove(false)
        }
        else{
        setMenuMove(true)
        }
    }

   

    return(
        <div ref={navBarRef} className="outer-container w-[100%] px-[4%] fixed top-0">
        <div className='navbar flex p-4 items-center max-w-[1400px] justify-between mx-auto'>
            <div className="navbar-logo me-5">
                <img src={logo} alt="NetFlix logo" className='h-8 md:block hidden'/>
                <img src={mobileLogo} alt="NetFlix logo" className='h-6 w-[60px] md:hidden'/>
            </div>
            <div className='menu-container relative w-[100%]'>
                <span className='md:hidden cursor-pointer' onClick={menuDisplay}>Menu</span>
                <ul ref={menuRef} className={` ${menuMove?'animatedown opacity-100 block' : 'animateup opacity-0 hidden'}hidden rounded-sm menu pe-3  pt-2 pb-4 absolute left-[-30px] md:hidden bg-[#2f2d2d]`}>

                <img src={mobileLogo} alt="NetFlix logo" className='h-3 w-[25px] ms-3 me-1 inline-block'/>

                <span className=' border-slate-500'>Netflix web</span>
                    <hr className='my-1 w-[95%] mx-auto border-slate-600'/>
                    <div className='px-1'>
                    <li onClick={()=>navigate('/')} className='hover:bg-black hover:rounded-[10px]'><i class="fa-solid fa-house me-2 ms-2"></i>Home</li>
                    <li onClick={()=>navigate('/category/TvShows')} className='hover:bg-black hover:rounded-[10px]'><i class="fa-solid fa-clapperboard me-2 ms-2"></i>Tv Shows</li>
                    <li onClick={()=>navigate('/category/Movies')} className='hover:bg-black hover:rounded-[10px]'><i class="fa-solid fa-film me-2 ms-2"></i>Movies</li>
                    <li onClick={()=>navigate('/category/newPopular')} className='hover:bg-black hover:rounded-[10px]'><i class="fa-regular fa-newspaper me-2 ms-2"></i>New & Popular</li>
                    <li  className='hover:bg-black hover:rounded-[10px]'><i class="fa-regular fa-bell me-2 ms-2"></i>Bell</li>
                    </div>
                </ul>
                <ul ref={menuRef} className="menu hidden gap-2  md:flex md:opacity-100 md:relative md:left-0 md:top-0 md:border-none md:text-start md:animate-none">
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li onClick={()=>navigate('/category/TvShows')}>Tv Shows</li>
                    <li onClick={()=>navigate('/category/Movies')}>movies</li>
                    <li onClick={()=>navigate("/category/newPopular")}>New & Popular</li>
                </ul>
            </div>
            <div className="navbar-right flex gap-4 items-center">
            <i class="fa-solid fa-magnifying-glass mt-1"></i>
            <input onClick={()=>navigate('/search')} type="text" placeholder='Search a movie' className='search-movie bg-transparent'/>
            <i class="fa-regular fa-bell hidden md:inline-block"></i>
            <img  src={profile_img} alt="" className='rounded-3xl' />
            <button onClick={logout}>logout</button>
            </div>
        </div>
        </div>
    )
}

export default Navbar;