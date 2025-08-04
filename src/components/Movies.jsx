import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({ handleAddToWatchlist,handleRemoveFromWatchList, watchlist }) 
 {

  const[movies, setMovies] = useState([])
  const[pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if(pageNo === 1)
    {
      setPageNo(pageNo)
    }
    else{
    setPageNo(pageNo-1)
    }
  }

    const handleNext = () => {
    setPageNo(pageNo+1)
  }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fb1764ef8143aa3371f902f1b1e76f05&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div style={{padding:'5px'}}>
        <div style={{fontSize:'2rem', fontWeight:'bold', textAlign:'center'}}>
            Trending Movies
        </div>

        <div className='flex flex-row flex-wrap justify-around gap-15'>
            {movies.map((movieObj)=>{
                return <MovieCard watchlist={watchlist} key = {movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />
            })}

        </div>

        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies;


//https://api.themoviedb.org/3/movie/popular?api_key=fb1764ef8143aa3371f902f1b1e76f05&language=en-US&page=1