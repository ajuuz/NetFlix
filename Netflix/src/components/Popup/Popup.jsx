import './Popup.css'
import requests from '../../requests'
import fetchAxios from '../../fetchAxios'
import React, { useEffect, useState } from 'react'
const API_key=requests.apiKey;
const Popup = ({homeRef,data,closeIframe,popupRef}) => {

    console.log(homeRef)
    const [videoKey,setVideoKey] = useState()
    useEffect(()=>{
    async function fetchData()
    {
       if('name' in data)
       {
        const response = await fetchAxios.get(`tv/${data.id}/videos?api_key=${API_key}`)
        console.log(response.data.results[0].key)
        setVideoKey(response.data.results[0].key)
        
       }
       else
       {
        const response = await fetchAxios.get(`movie/${data.id}/videos?api_key=${API_key}`)
        console.log(response.data.results[0].key)
        setVideoKey(response.data.results[0].key)
       }
    }
    fetchData();
    },[data])
   
    function handleClose(){
        closeIframe(false)
    }



  return (
    
    <div ref={popupRef} className='iframePopup  md:h-[690px] md:w-[660px]'>
    <div className='iframe-container w-[100%] flex'>
    <iframe width="100%" className='m-auto iframe' height="315" src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&rel=0&showinfo=0&si=jp8qp-DuWmI6Smw9`} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin" 
     allowfullscreen>
     </iframe>
    </div>
    <div className='video-description w-[100%] h-[30%]'>
        <div>
       <h4>{'name' in data?data.name:data.title}</h4>
       {/* <button onClick={handleClose}>close</button> */}
       </div>
       <h6>{Math.floor(data.vote_average*10)}% Match</h6>
       <p>{data.overview}</p>
    </div>
    
    </div>
  )
}

export default Popup;
