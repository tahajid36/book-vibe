import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Books/Book';

const ReadList = () => {
    const data = useLoaderData()
    console.log(data)
    const [readlist, setReadList] = useState([])

    useEffect(() => {
        const storedBookData = getStoredBook()
        //array of id which are in integer
        const convertedBookData = storedBookData.map(id=> parseInt(id))
        const myReadList = data.filter(book=> convertedBookData.includes(book.bookId))
        setReadList(myReadList)
         
    }, [])
    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>Read Book List: </Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book to read  {readlist.length}</h2>
      {
        readlist.map(book=> <Book singleBook={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wishlist</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;