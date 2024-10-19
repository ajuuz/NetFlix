import { useEffect, useRef, useState , useContext } from 'react';
import Popup from '../popup/popup';
import fetchAxios from '../../fetchAxios'
import './TitleCard.css'
// tmdb url for accessing images
const base_url= "https://image.tmdb.org/t/p/original/"

function TitleCard({title,fetchUrl,isLargeRow,homeRef}){

    const [movies,setMovies] = useState([])
    const titleCardRef=useRef()
    const [iframe,setIframe] = useState(false)
    const popupRef = useRef();

    useEffect(()=>{
        async function fetchData(){
            const request = await fetchAxios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData(); 
    },[fetchUrl]);


    useEffect(()=>{
        const titleCard = titleCardRef.current;
        const handleScroll=(e)=>{
            e.preventDefault();
      titleCard.scrollLeft += event.deltaY;
        }

    titleCard.addEventListener('wheel',handleScroll)
    return () => {
        
        titleCard.removeEventListener('wheel', handleScroll);
      };
    },[])
    
    function handleClick(id,index){
        console.log(id)
        setIframe(index)
    }

    // 
//     const closePopupIfOutside = (e) => {
//         if (!popupRef.current.contains(e.target)) {
//             setIframe(null); // Close the popup if clicked outside
//         }
//     };

//     useEffect(() => {
//         if (iframe !== null) {
//             document.addEventListener('mousedown', closePopupIfOutside); // Listen for mouse clicks
//             document.addEventListener('touchstart', closePopupIfOutside); // Listen for touch events
//         } else {
//             document.removeEventListener('mousedown', closePopupIfOutside);
//             document.removeEventListener('touchstart', closePopupIfOutside);
//         }

//         // Cleanup event listeners when component unmounts
//         return () => {
//             document.removeEventListener('mousedown', closePopupIfOutside);
//             document.removeEventListener('touchstart', closePopupIfOutside);
//         };
//     }, [iframe]);
// // 

    function closePopupIfOutside(e)
    {
        if(!popupRef.current.contains(e.target))
        {
            setIframe(null);
        }
    }

    useEffect(()=>{

        if(iframe!==null)
        {
            document.addEventListener('mousedown',closePopupIfOutside)
        }
        else
        {
            document.removeEventListener('mousedown',closePopupIfOutside)
        }

        return  ()=>document.removeEventListener('mousedown',closePopupIfOutside)
    },[iframe])

    return(
        <div>
        <div className={iframe?'blurring':iframe===0?'blurring':''}></div>
        <div className='row mx-2 md:mx-10'>
            <div className={isLargeRow&&'h1Large'}>
            <h2 >{title}</h2>
            </div>
            <div className='row-posters' ref={titleCardRef}>
                {movies.map((data,index)=>(
                        <>
                        <img key={data.id} className={`row-poster ${isLargeRow && "row-large"}`} src={`${base_url}${isLargeRow?data.poster_path:data.poster_path}`} alt={data.name} onClick={()=>handleClick(data.id,index)}></img>
                        {iframe===index && <Popup popupRef={popupRef} homeRef={homeRef} data={data} closeIframe={setIframe}/>}
                         </>
                    ))}
            </div>
        </div>
        </div>
    )
}

export default TitleCard;