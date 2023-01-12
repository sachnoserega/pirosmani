import React from 'react'
import { Link } from 'react-router-dom';
import cartEmpty from '../assets/img/empty-cart.png'

const CartEmpty = () => {
    return (
        <>
            <div className='content'>
                <div className="cart cart--empty">
                    <h2>Корзина пустая <span>😕</span></h2>
                    <p>Вероятней всего, вы еще ничего не заказали.
                        <br />Для того, чтобы сделать заказ, перейди на главную страницу.
                    </p>
                    <img src={cartEmpty} alt="Empty" />
                    <Link to='/' className="button button--black" ><span>Вернуться назад</span></Link>
                </div>
            </div>
        </>
    );
}

export default CartEmpty;