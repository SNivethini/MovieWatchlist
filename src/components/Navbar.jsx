import React from "react";
import logo from "../images.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[60px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZ3fAY0pDa8awRNUhKtXxkOAfZy7Nzd0RUA&usqp=CAU" alt="no" />
      <Link to="/" className="text-blue-400 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};
