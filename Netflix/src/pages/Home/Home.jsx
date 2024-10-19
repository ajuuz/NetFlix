import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import TitleCard from '../../components/TitleCard/TitleCard.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import requests from '../../requests.js'
import fetchAxios from '../../fetchAxios.js'
import { useEffect, useState,useRef } from 'react'

// tmdb url for accessing image
const base_url= "https://image.tmdb.org/t/p/original/"

function  Home(){
const [movie,setMovies]= useState([])
const homeRef=useRef()


    useEffect(()=>{
        async function fetchData(){
            const request = await fetchAxios.get(requests.fetchNetflixOriginals);
            console.log(Math.floor(Math.random() * request.data.results.length - 1))
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData()
    },[])

    

    return(
        <>
        <div ref={homeRef} className="home pt-[400px] after:h-[700px] xl:after:h-auto bg-[auto_700px] xl:bg-[100%_auto] md:pt-60" style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`}}> 
            <Navbar/>
            <Hero data={movie}/>
            <div className='md:mx-10 mx-5'>
            <TitleCard homeRef={homeRef} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <TitleCard homeRef={homeRef} title="Trending Now"fetchUrl={requests.fetchTrending}/>
            <TitleCard homeRef={homeRef} title="Top Rated"fetchUrl={requests.fetchTopRated}/>
            <TitleCard homeRef={homeRef} title="Horror"fetchUrl={requests.fetchHorrorMovies}/>
            <TitleCard homeRef={homeRef} title="Hindi"fetchUrl={requests.fetchActionHindiMovies}/>
            <TitleCard homeRef={homeRef} title="SciFi"fetchUrl={requests.fetchSciFi}/>
            </div>
            <Footer/>
            </div>
            </>
    )
}

export default Home;


//f7791b839bed29e37729e6a209f6c2e5