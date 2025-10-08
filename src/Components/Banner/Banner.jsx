import React from "react";
import bookimg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div >
      <div className="flex justify-around items-center p-12 ">
       <div>
       <h1 className="text-5xl font-bold ">Books to freshen up <br /> your bookshelf</h1>
       <button className="btn btn-success mt-3 p-4 w-5/11 text-3xl">Test</button>
       </div>
        <div>
          <img className="w-full rounded-2xl" src={bookimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
