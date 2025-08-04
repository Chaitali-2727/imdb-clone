import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchlist,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }

    return false;
  }
  return (
    <div
      className="h-[250px] w-[150px] rounded-[10px] bg-center bg-cover bg-no-repeat cursor-pointer transition duration-300 hover:scale-110 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
  <div
    onClick={() => handleRemoveFromWatchList(movieObj)}
    role="button"
    title="Remove from Watchlist"
    style={{ background: "lightgray", borderRadius: "15px", padding: "2px 6px", margin: "5px" }}
  >
    ❌
  </div>
) : (
  <div
    onClick={() => handleAddToWatchlist(movieObj)}
    role="button"
    title="Add to Watchlist"
    style={{ background: "lightgray", borderRadius: "15px", padding: "2px 6px", margin: "5px" }}
  >
    ❤️
  </div>
)}


      <div
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "1px 1px 4px black",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          textAlign: "center",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "4px 0",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
