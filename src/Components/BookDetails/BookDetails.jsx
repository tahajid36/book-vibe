import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {bookName,author,totalPages,yearOfPublishing,publisher,rating, category, review, image} = singleBook
  const handleMarkAsRead = () => {
    addToStoredDB(id)
    // store the id
    // think to store where/ arrray or collection /if its exist then alert if not push to collection

  }
  return (
    <div className="mx-auto flex justify-between gap-12 items-center  my-[100px]">
      
      <div className="w-5/10 bg-gray-200 p-7 rounded-2xl ">
      <img className="w-[400px] mx-auto h-full rounded-2xl" src={image} alt="" />
      </div>
      
      
      <div className="space-y-4 w-5/10">
      <h2 className="text-5xl font-bold">{bookName}</h2>
      <p>By: {author}</p>

      < hr className="text-gray-300" />

      <p className="text-xl">{category}</p>
      < hr className="text-gray-300" />
      <p><span className="font-bold">Review:</span>{review}</p>
      < hr className="text-gray-300" />

      <p><span className="font-bold">TotalPages: </span>{totalPages}</p>
      <p><span className="font-bold">Year Of Publishing: </span>{yearOfPublishing}</p>
      <p><span className="font-bold">Publisher:</span>{publisher}</p>
      <p><span className="font-bold">Rating: </span>{rating} </p>





      <button onClick={() => handleMarkAsRead(id)} className="btn m-2 ">Mark as Read</button>
      <button className="btn m-2 btn-primary"> Add To Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
