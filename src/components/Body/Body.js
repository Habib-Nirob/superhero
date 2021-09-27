import React, { useEffect, useState } from 'react';
import BooksContainer from '../BooksContainer/BooksContainer';
import './Body.css'
const Body = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data));
    },[]);

    return (
        <main className='body'>
            <BooksContainer books={books}/>
        </main>
    );
};

export default Body;