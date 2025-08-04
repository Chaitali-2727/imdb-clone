import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';


function App() {
  
  let[watchlist, SetWatchList] = useState([])

  let handleAddToWatchlist = (movieObj) => {
  if (!watchlist.some((movie) => movie.id === movieObj.id)) {
    let newWatchList = [...watchlist, movieObj];
    SetWatchList(newWatchList);
  }
};


  let handleRemoveFromWatchList = (movieObj) => {
  const filtered = watchlist.filter((movie) => movie.id !== movieObj.id);
  SetWatchList(filtered);
};


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Banner /><Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/></>} />
        <Route
  path="/watchlist"
  element={
    <WatchList
      watchlist={watchlist}
      handleRemoveFromWatchList={handleRemoveFromWatchList}
      handleAddToWatchlist={handleAddToWatchlist}
    />
  }
/>

      </Routes>
      <Analytics />
    </BrowserRouter>
    
  );
}

export default App;
