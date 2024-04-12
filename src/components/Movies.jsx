import React, { useEffect, useState } from "react";
import Moviecards from "./Moviecards";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchlist,
  handleRemovefromWatchlist,
  watchlist,
}) {
  const [movies, setMovie] = useState([]);
  const [Pagno, setPage] = useState(1);

  const changeNext = () => {
    setPage(Pagno + 1);
  };

  const changePrev = () => {
    if (Pagno == 1) {
      setPage(Pagno);
    } else {
      setPage(Pagno - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb15d3b61f18b403c013e5c98137364a&language=en-US&page=${Pagno}`
      )
      .then((res) => {
        // console.log(res.data.results);
        setMovie(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Pagno]);
  return (
    <div>
      <div className="text-center text-xl m-4 p-4 font-bold">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <Moviecards
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              movieObj={movieObj}
              handleRemovefromWatchlist={handleRemovefromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination
        changeNext={changeNext}
        changePrev={changePrev}
        Pagno={Pagno}
      />
    </div>
  );
}

export default Movies;
