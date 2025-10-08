import React, { Suspense, useState } from 'react';
import Book from './Book';

const Books = ({data}) => {
    const [Allbooks, setAllBooks] = useState([])
  
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books here</h1>
            <Suspense>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
               {
                    data.map((singleBook)=> <Book singleBook={singleBook} key={singleBook.bookId}></Book>)
                }
               </div>
                
            </Suspense>
        </div>
    );
};

export default Books;

















  // useEffect(()=> {
    //     fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=> res.json())
    //     .then(data=>setAllBooks(data))

    // })
    // const BookPromise =fetch('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res=> res.json())