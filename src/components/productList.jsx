import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import BtnAddToFavorite from './btnAddToFavorite'

const ProductList = ({ items, productsType, addToFavorites, maxLength }) => {
    if (maxLength) {
        items = items.slice(0, maxLength);
    }
    return (
        <>
            {Object.entries(items).map(([key, item]) => (
                <div className="products__item" key={items[key]._id}>
                    <Link className='product__img'
                        to={`/${productsType}/${item._id}`} >
                        <img src={item.img} alt="" />
                    </ Link>
                    <p className="product__title">{item.name}</p>
                    <p className="product__price">{item.price} ₴
                            {item.oldPrice && (
                            <span className="discount">{item.oldPrice} ₴</span>
                        )}
                    </p>
                    <div className="product__buttons">
                        <button className="product__buy">Купить</button>
                        <BtnAddToFavorite item={item} addToFavorites={addToFavorites} />
                    </div>
                </div>
            ))}
        </>
    )
}

ProductList.propTypes = {
    items: PropTypes.array.isRequired,
    productsType: PropTypes.string.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    maxLength: PropTypes.number
}
export default ProductList
