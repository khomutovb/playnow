import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Header = ({ productsFavoriteLength }) => {
    return (
        <header>
            <div className="container container__header">
                <div className="header__line">
                    <div className="header__row header__row-left">
                        <div className="header__item">
                            <Link to='/' className="logo"><img src="/icons/logo.svg" alt="logo" /><p>Playnow</p></Link>
                        </div>
                        <div className="header__item">
                            <div className="search">
                                <form action="" name="form__search">
                                    <input type="text" name="search" placeholder="Я ищу" />
                                </form>
                                <div className="search__icon">
                                    <img src="/icons/search-icon.svg" alt="search-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__row header__row-right">
                        <div className="header__item">
                            <Link to='/favorites' className="favorites">
                                <img src="/icons/favorites.svg" alt="favorites" />
                                <div className="favorites-count">{productsFavoriteLength !== 0 ? productsFavoriteLength : ''}</div>
                            </Link>
                        </div>
                        <div className="header__item">
                            <div className="cart">
                                <img src="/icons/cart.svg" alt="cart" />
                            </div>
                        </div>
                        <div className="header__item">
                            <Link to='/login' className="account"><img src="/icons/account.svg" alt="account" /></Link>
                        </div>
                        <div className="header__item">
                            <div className="menu">
                                <img src="/icons/menu.svg" alt="menu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    productsFavoriteLength: PropTypes.number,
}
export default Header;