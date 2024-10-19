import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TitleCard from '../../components/TitleCard/TitleCard';
import requests from '../../requests';
import './OtherCategory.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const OtherCategory = () => {

    const { catName } = useParams()
   
let cards;
    if(catName === "Movies")
    {
       cards =   <div className={`relativ py-20 `}>
       <h1 className='font-bold ms-10 text-2xl'>Category : {catName}</h1>
        <TitleCard title="Action Movie"fetchUrl={requests.fetchActionMovies}/>
             <TitleCard title="Comedy"fetchUrl={requests.fetchComedyMovies}/>
             {/* <TitleCard title="Romance"fetchUrl={requests.fetchRomanceMovies}/> */}
             <TitleCard title="Mystery"fetchUrl={requests.fetchMystery}/>
             <TitleCard title="Documentary"fetchUrl={requests.fetchDocumentaries}/>
       </div>
    }
    else if(catName==="TvShows")
    {
        cards =   <div className={`py-20 `}>
       <h1 className='font-bold ms-10 text-2xl'>Category : {catName}</h1>
        <TitleCard title="War and Politics"fetchUrl={requests.fetchTvWarAndPolitics}/>
             <TitleCard title="For Kids"fetchUrl={requests.fetchTvKids}/>
             <TitleCard title="Reality"fetchUrl={requests.fetchTvReality}/>
             <TitleCard title="News"fetchUrl={requests.fetchTvNews}/>
             {/* <TitleCard title="Documentary"fetchUrl={requests.fetchDocumentaries}/> */}
       </div>
    }
    else if(catName==="newPopular")
    {
        cards =   <div className={`py-20 `}>
       <h1 className='font-bold ms-10 text-2xl'>Category : {catName}</h1>
        <TitleCard title="Now Playing"fetchUrl={requests.fetchNowPlaying}/>
             <TitleCard title="Upcoming"fetchUrl={requests.fetchUpcoming}/>
             <TitleCard title="Reality"fetchUrl={requests.fetchTopRated}/>
             <TitleCard title="Popular"fetchUrl={requests.fetchPopular}/>
             {/* <TitleCard title="Documentary"fetchUrl={requests.fetchDocumentaries}/> */}
       </div>
    }




  return (
    <div className=''>
        <Navbar/>
        {cards}
      <Footer/>
    </div>
  )
}

export default OtherCategory;
