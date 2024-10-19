import React,{useEffect, useState,useRef} from 'react';
import Popup from '../popup/popup';
import requests from '../../requests';
import fetchAxios from '../../fetchAxios'
import './Hero.css'


const Hero = ({data}) => {

const [iframe,setIframe] = useState(null);
const popupRef = useRef()


function closePopupIfOutside(e){
  if(!popupRef.current.contains(e.target))
  setIframe(null);
}

useEffect(()=>{
  if(iframe!==null)
  {
    document.addEventListener('mousedown',closePopupIfOutside);
  }
  else
  {
    document.removeEventListener('mousedown',closePopupIfOutside);
  }
  
  return ()=>{
    document.removeEventListener('mousedown',closePopupIfOutside);
    
  }
},[iframe])

 function playIframe(){
  setIframe(true);
 }
 
  return (
    <div>
    <div className={iframe?'blurrin':''}></div>
    <div className='hero h-[300px] mb-[100px] md:mb-[150px] w-[90%] m-auto flex items-center relative'>
      <div className='max-w-[32rem] '>
        <h1>{data.name}</h1>
        <span className='me-4 text-yellow-300'>{Math.floor(data.vote_average*10)}% Rating</span><span>{data.first_air_date}</span>
        <p className='mb-4'>{data.overview}</p>
      <button onClick={playIframe} className='hover:border-blue-500 bg-white text-black btn border me-3'><i class="fa-solid fa-play me-3"></i>Play</button>
      <button className='hover:border-blue-500 btn border'><i class="fa-solid fa-circle-info me-2"></i>more info</button>
      </div>
      {iframe && <Popup data={data} popupRef={popupRef} closeIframe={setIframe}/>}
      </div>
      </div>
  )
}

export default Hero
