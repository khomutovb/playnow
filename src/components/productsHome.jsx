import React from 'react'
import { Link } from 'react-router-dom';
import ProductNavigation from '../components/productNavigation'
import ProductList from '../components/productList'
import PropTypes from 'prop-types'

const ProductsHome = ({ products, filteredProducts, clearFilter, selectedType, handleTypeSelect, addToFavorites }) => {
    return (
        <div className="home__page">
            {(filteredProducts ? filteredProducts.length : filteredProducts) ? (
                <>
                    <ProductNavigation items={products} handleTypeSelect={handleTypeSelect} selectedType={selectedType} clearFilter={clearFilter} />
                    {filteredProducts.map((item) => (
                        <div key={item.type} className={"products " + item.type}>
                            <div className="products__row-text">
                                <p className="products__title">{item.name}</p>
                                <Link to={`/${item.type}`} className="products__more">Показать все <span>{item.productsList.length}</span></Link>
                            </div>
                            <div className="products__list">
                                <ProductList key={item.type}
                                    items={item.productsList}
                                    productsType={item.type}
                                    addToFavorites={addToFavorites}
                                    maxLength={5}
                                />
                            </div>
                        </div>
                    ))}
                </>
            ) : (<div className="loading">Загрузка...</div>)}
        </div>
    )
}

ProductsHome.propTypes = {
    products: PropTypes.array,
    filteredProducts: PropTypes.array,
    handleTypeSelect: PropTypes.func,
    selectedType: PropTypes.string,
    clearFilter: PropTypes.func,
    addToFavorites: PropTypes.func,
}
export default ProductsHome