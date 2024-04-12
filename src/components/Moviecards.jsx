import React from "react";

function Moviecards({
  poster_path,
  name,
  handleAddToWatchlist,
  movieObj,
  handleRemovefromWatchlist,
  watchlist,
}) {
  function doesContain() {
    for (let i = 0; i<watchlist.length ; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  
  return (
    <div
      className="h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemovefromWatchlist(movieObj)}
          className="w-8 h-8  m-3 border-2 rounded-lg bg-gray-900/60 flex justify-center items-center"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="w-8 h-8  m-3 border-2 rounded-lg bg-gray-900/60 flex justify-center items-center"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center bg-gray-900/60 p-2 ">
        {name}
      </div>
    </div>
  );
}

export default Moviecards;
