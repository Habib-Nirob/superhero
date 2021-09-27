import React from 'react';
import BookCard from '../BookCard/BookCard';
import QuantityCard from '../QuantityCard/QuantityCard';
import {useState} from 'react';

const BooksContainer = (props) => {
    const {books}= props;

    const [ cart , setCart ] = useState([]);
    const handleAddBook=(book)=>{
        if(book['quantity']){
            const bookIndex= cart.indexOf(book);
            const newCart=[...cart]

            book['quantity']+=1;
            newCart.splice(bookIndex,1,book);

            setCart(newCart);
            // console.log(newCart)

        }else{
            book['quantity']=1;
            const newCart=[ ...cart  , book ]
            setCart(newCart);
            // console.log(newCart)
            
        }
    }
    return (
        <div className="container ">
            <div className='row pt-3'>
                <div className="col-9">
                    <div className="row">
                        {books.map(( book )=> <BookCard handleAddBook={handleAddBook} key={book.book_id} book={book}></BookCard>)}
                    </div>
                </div>
                <div className="col-3">
                    <div className="row">
                        <QuantityCard cart={cart}></QuantityCard>
                    </div>
                </div>
          
            </div>
        </div>
    );
};

export default BooksContainer;