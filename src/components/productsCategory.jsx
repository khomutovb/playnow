import React from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../components/productList'
import PropTypes from 'prop-types'

const ProductsCategory = ({ filteredProducts, addToFavorites }) => {
    return (
        <div className="category__page">
            {(filteredProducts ? filteredProducts.length : filteredProducts) ? (
                <>
                    <div className="store__nav">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to='/'>Главная</Link>
                                </li>
                                <li className="breadcrumb-item active">{filteredProducts[0].name}</li>
                            </ul>
                        </nav>
                        <div className="store__sort">
                            <p>Сортировка по:</p>
                            <select className="store__sort__list">
                                <option value="">популярности</option>
                            </select>
                        </div>
                    </div>
                    {filteredProducts.map((item) => (
                        <div key={item.type} className={"products " + item.type}>
                            <div className="products__row-text">
                                <p className="products__title">{item.name}</p>
                            </div>
                            <div className="products__list">
                                <ProductList key={item.type}
                                    items={item.productsList}
                                    productsType={item.type}
                                    addToFavorites={addToFavorites}
                                />
                            </div>
                        </div>
                    ))}
                </>
            ) : (<div className="loading">Загрузка...</div>)}
        </div>
    )
}

ProductsCategory.propTypes = {
    filteredProducts: PropTypes.array,
    addToFavorites: PropTypes.func,
}
export default ProductsCategory