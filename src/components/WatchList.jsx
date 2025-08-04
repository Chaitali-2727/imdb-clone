import React, { useEffect, useState } from "react";
import axios from "axios";

function WatchList({ watchlist, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // 'asc' | 'desc' | null
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=fb1764ef8143aa3371f902f1b1e76f05&language=en-US"
      )
      .then((res) => setGenreList(res.data.genres))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);

  const getGenreNames = (genre_ids) => {
    if (!genre_ids || genreList.length === 0) return ["Loading..."];
    return genre_ids
      .map((id) => {
        const genre = genreList.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      })
      .filter(Boolean);
  };

  // Filter based on search
  const filteredWatchlist = watchlist.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort based on sortOrder
  const sortedWatchlist = [...filteredWatchlist].sort((a, b) => {
    if (sortOrder === "asc") return a.vote_average - b.vote_average;
    if (sortOrder === "desc") return b.vote_average - a.vote_average;
    return 0; // No sorting
  });

  // Toggle sort order
  const toggleSort = (order) => {
    setSortOrder((prev) => (prev === order ? null : order));
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 mt-3">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[15rem] px-2"
          style={{ background: "lightgray", borderRadius: "4px" ,marginTop:'5px'}}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">My Watchlist</h1>

        {sortedWatchlist.length === 0 ? (
          <p className="text-center text-lg mt-10">No movies found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 rounded shadow">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="px-4 py-2 border">Poster</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border flex items-center gap-2">
                    <button onClick={() => toggleSort("asc")}>⬆️</button>
                    Ratings
                    <button onClick={() => toggleSort("desc")}>⬇️</button>
                  </th>
                  <th className="px-4 py-2 border">Popularity</th>
                  <th className="px-4 py-2 border">Genre</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedWatchlist.map((movie) => (
                  <tr key={movie.id} className="text-center">
                    <td className="px-4 py-2 border">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.original_title}
                        style={{ height: "60px", width: "auto", borderRadius: "6px" }}
                      />
                    </td>
                    <td className="px-4 py-2 border">{movie.original_title}</td>
                    <td className="px-4 py-2 border">{movie.vote_average}</td>
                    <td className="px-4 py-2 border">{movie.popularity}</td>
                    <td className="px-4 py-2 border">
                      {getGenreNames(movie.genre_ids).join(", ")}
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => handleRemoveFromWatchList(movie)}
                        className="text-red-600 hover:text-red-800 font-semibold" style={{color:'red'}}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default WatchList;
