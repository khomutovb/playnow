import React from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../components/productList'
import PropTypes from 'prop-types'

const Favorites = ({ productsFavorite, addToFavorites, productsFavoriteLength }) => {
    return (
        <>
            {productsFavoriteLength !== 0 ? (
                <section className="favorites__page">
                    <div className="container">
                        <p className="favorites__page-title">Избранное</p>
                        <div className="favorites__row">
                            {productsFavorite.map((item) => (
                                <ProductList key={item.type}
                                    items={item.productsList}
                                    productsType={item.type}
                                    addToFavorites={addToFavorites}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                    <div className="favorites__empty">
                        <div className="loading">Список пуст</div>
                        <Link to='/' className="btn__back-home">Вернуться на главную</Link>
                    </div>
                )
            }
        </>
    )
}

Favorites.propTypes = {
    productsFavorite: PropTypes.array,
    addToFavorites: PropTypes.func,
    productsFavoriteLength: PropTypes.number
}
export default Favorites