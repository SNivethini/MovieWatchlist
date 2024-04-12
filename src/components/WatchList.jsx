import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, handleRemovefromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genrelist,setGenrelist] = useState(["All Gnere"])
  const [currentGenre,setCurrentGenre] =useState('All Genre')

  function handleSearch(e) {
    setSearch(e.target.value);
  }
 function handleGenre(genre){
  setCurrentGenre(genre)
 }

 
  let sortIncrease = () => {
    let sortedInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedInc]);
  };

  let sortDecrease = () => {
    let sortedDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDec]);
  };

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[(movieObj.genre_ids[0])]
    })
    // console.log(temp)
    temp = new Set(temp)
    setGenrelist(['All Genre', ...temp])

  },[watchlist])


  return (
    <div>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre)=>{
          return <div onClick={()=>handleGenre(genre)} className={ currentGenre==genre ? "w-[100px] h-[40px] bg-blue-400 text-white flex justify-center items-center rounded-xl font-bold mr-4":
          "w-[100px] h-[40px] bg-gray-400 text-white flex justify-center items-center rounded-xl font-bold mr-4"}>
          {genre}
        </div>

        })}
        
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="search for movies"
          className="bg-gray-200 w-[200px] h-[40px] outline-none m-4 p-4"
        />
      </div>

      <div className=" overflow-hidden rounded-xl border border-gray-200 m-8">
        <table className=" border w-full text-gray-900 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center ">
                <div className="p-2" onClick={sortIncrease}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2" onClick={sortDecrease}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popuarity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currentGenre=='All Genre'){
                return true
              }else{
                return currentGenre==genreids[movieObj.genre_ids[0]]
              }
            }
            
            )
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="px-5 py-5 flex items-center">
                      <img
                        className="w-[90px] h-[90px]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemovefromWatchlist(movieObj)}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
