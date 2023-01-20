import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    }
    else {
        message = <p>Thanks for buying !!!</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Orders Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'violet'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Now you buying 3 T-shirt</p> : <p>More will be needed !!?</p>}
            <p>and operator</p>
            {cart.length === 2 && <p>Double Item !! </p>}
            <p>OR operator</p>
            {cart.length === 4 || <p>4 ta item na !!</p>}
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering 
 1. use element in a variable and use if-else statement to set value
 2. ternary operation condition ? true : false
 3. && operator (if condition is true, i want to display something)
 4. || operator (if condition is false, i want to display something)
 */