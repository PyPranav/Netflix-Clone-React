import React, { useState, useEffect } from 'react';
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original";
function Row({title, fetchUrl, isLarge}) {
        
    // useState lets use change the value of movies using the setMovies Method currently its intitialized with []
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    // useEffect: snippet of code the runs everytime a condn is met or when the row is first loaded 
    useEffect(()=>{
        //if [], then this will only run when row is first loaded
        //taking [movies] as example
        // if [movies], it will run when row is first loaded and everytime the value of movies changes
        
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
        // the api call is asynchronise as it will take some time to fetch the data.
        // and useEfect doesnt support async call hence we need to make function within useffect and make the api call from within
        // tldr put any variable being used inside useEffect that was originally outside inside the [] like fetchUrl here
    },[fetchUrl])
    // console.log(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie)=>{
        if (trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie.name||movie.original_name||movie.title).
            then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v')); 
            }).catch((error)=> console.log(error))
        }
    }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row__posters">
            {movies.map(movie => (
            <img key={movie.id} 
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLarge && "row__posterLarge"}`} src={`${base_url}${isLarge? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
            ))}
        </div>
        {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row