import React from 'react';
import './Orders.css';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product = {product}
                    handelRemoveProduct = {handelRemoveProduct}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <Link to='/shipment'>
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;