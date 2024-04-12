import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    // setWatchlist((preData)=>[...preData , movieObj]) this type will not work for obj
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist)); //set item to local storage,frm that we can get items
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  const handleRemovefromWatchlist = (movieObj) => {
    let filterWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
   
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchList));  //whereever,we delete watchlist and refresh data wont come again by using this
    setWatchlist(filterWatchList);
    console.log(filterWatchList);
  };

  //storing data in local storage, so that,the data will no get lost while refreshing webpage
  useEffect(() => {
    let moviesFromLocalstorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalstorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalstorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemovefromWatchlist={handleRemovefromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemovefromWatchlist={handleRemovefromWatchlist}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
