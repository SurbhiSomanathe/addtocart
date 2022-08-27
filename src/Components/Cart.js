import React, { useState } from 'react'
import './cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from "./products";

const Cart = () => {
    const [item, setItem] = useState(products);
  return (
    <>
        <header>
            <div className="continue-shopping" >
                <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                <h3>continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="./images/cart.png" alt="cart"  />
                <p></p>

            </div>
        </header>
        <section className="main-cart-section">
            <h1>Shop in style</h1>
            <p className="total-items">With this  <span className="total-item-count"></span> shop hompeage</p>

            <div className="cart-items">
                <div  className="cart-items-container">
                <Scrollbars> 
                    {
                        item.map((curItem) => {
                            return  < Items key={curItem.id} {...curItem}/>
                        })
                    }                   
                </Scrollbars> 
                </div>
                <div className="card-total">
                    <h3>Cart Total : <span>200000rs</span></h3>
                    <button>Checkout</button>

                </div>
            </div>
        </section>
    </>
  )
}

export default Cart