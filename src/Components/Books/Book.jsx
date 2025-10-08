import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({singleBook}) => {
    const {bookName, bookId, category,yearOfPublishing, rating, author, image} = singleBook
  
    return (
   <Link to={`/bookDetails/${bookId}`}>
        <div className="card shadow-sm bg-base-100 w-96 shadow-sm">
  <figure className='p-5 bg-gray-100'>
    <img
    className='h-[160px] rounded'
      
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>By: {author}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStar />
      </div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;