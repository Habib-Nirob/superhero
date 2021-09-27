import React from 'react';
import './BookCard.css'

const BookCard = (props) => {
    const { book : bookDetails } = props;
    return (
        <div className='col-4 '>
            <div className="card mb-3">
                <img src={bookDetails.Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bookDetails.Name}</h5>
                    <p className="card-text">Author : {bookDetails.Author}</p>
                    <p className="card-text">Edition : {bookDetails.Edition}</p>
                    <p className="card-text">Subject : {bookDetails.Subject}</p>
                    <p className="card-text">Publisher : {bookDetails.Publisher}</p>
                    <p className="card-text">Availability : {bookDetails.Availability}</p>
                    <p className="card-text">Price : {bookDetails.Price}</p>
                </div>
                <button type="button" className="btn btn-success" onClick={ ()=> props.handleAddBook(bookDetails)}  ><i className="fas fa-cart-plus me-2"></i>Add To Card</button>
            </div>
        </div>
    );
};

export default BookCard;