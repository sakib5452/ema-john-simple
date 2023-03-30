import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let shippingTotal = 0;
    for (const product of cart) {
        total = total + product.price
        shippingTotal = shippingTotal + product.shipping
    }

    const tax = total * 7 / 100;

    const grandTotal = total + shippingTotal + tax
    return (
        <div className='cart'>
            <h3> Oder Summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total shipping:${shippingTotal}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;