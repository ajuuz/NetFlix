import React, { useEffect,useRef } from "react";
import "./SearchSection.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchAxios from '../../fetchAxios'
import requests from "../../requests";
import Popup from "../popup/popup";
const SearchSection = () => {
    const API_KEY = requests.apiKey;
    const [subString,setSubString] = useState("");
    const [movies,setMovies] = useState([]);
    const [iframe,setIframe] = useState(false)
    const popupRef = useRef()
const navigate = useNavigate()

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
    

    const base_url= "https://image.tmdb.org/t/p/original/"

    const fetchUrl = `/search/movie?api_key=${API_KEY}&query=${subString}&include_adult=false`
    async function fetchData(){
        const request = await fetchAxios.get(fetchUrl);
        console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }

useEffect(()=>{


fetchData()

},[subString])

function searchChange(e){
    console.log("working")
    setSubString(e.target.value)
}

  return (
    <div>
        <button className="ms-5 mt-5 rounded-3xl border py-2 px-3 bg-red-500" onClick={()=>navigate(-1)}>back</button>
        <div className={iframe?`blurring`:iframe===0?`blurring`:""}></div>
      <div className="p-5 ">
        <input
          type="text"
          onChange={searchChange}
          className="w-[100%] search p-3 rounded-2xl border-2 "
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {
            movies.length>0
            ?( movies.map((movie,index)=>(<div key={movie.id} onClick={() => {setIframe(index)}} class="card w-[300px] h-[350px]">
            {movie.poster_path|| movie.backdrop_path
            ?<img
            src={`${base_url}${movie.poster_path}`}
            className="h-[100%] w-[100%]"
            alt={`${movie.title}`}
          />
          :
          <div className="relative">
          <img
          src={`https://www.prokerala.com/movies/assets/img/no-poster-available.jpg`}
          className="h-[100%] w-[100%]"
          alt={`${movie.title}`}
        />
            <p className="absolute top-2 left-5 font-bold  text-gray-700">TITLE : {movie.title.toUpperCase()}</p>
            <p className="absolute top-10 left-5 font-bold  text-gray-900">{movie.overview}</p>
        </div>
            }
            {iframe===index && <Popup  popupRef={popupRef} data={movie} closeIframe={setIframe}/>}
          </div>))
            
            )
          :<p>No movies Found</p>
        }
      
      </div>
    </div>
  );
};

export default SearchSection;
