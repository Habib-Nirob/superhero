import React from 'react';

const QuantityCard = (props) => {
    const { cart: cartItem } = props;

    const totalReducer = (prevValue, currentValue) => prevValue + (currentValue.Price*currentValue.quantity);
    const totalPrice = cartItem.reduce(totalReducer, 0).toFixed(2);

    const totalQuantityReducer = (prevQuantit, currentQuantit) => prevQuantit + currentQuantit.quantity;
    const totalQuantity = cartItem.reduce(totalQuantityReducer, 0);

    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Your total Bill  </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Total books added : {cartItem.length} </h6>
                    <h6 className="card-subtitle mb-2 text-muted">Total books Quantity : {totalQuantity} </h6>
                    <ul>
                        {cartItem.map(item => <li className="card-text" key={item.book_id}>{item.Name} <span className='text-success fw-bold'>({item.quantity})</span></li>)}
                    </ul>
                    <h6 className="card-subtitle mb-2 text-muted">Total Bill : {totalPrice} </h6>

                </div>
            </div>
        </div>
    );
};

export default QuantityCard;