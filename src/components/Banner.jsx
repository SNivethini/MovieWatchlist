import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWTUhvDeELVo1eQwgm-SFlZv5gV8aeWJs_g&usqp=CAU)`,
      }}
    >
        
      <div className="text-white w-full text-center bg-gray-900/60 p-2 ">
        Avangers
      </div>
    </div>
  );
}

export default Banner;
