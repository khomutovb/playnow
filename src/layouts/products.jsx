import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProductsHome from '../components/productsHome'
import ProductsCategory from '../components/productsCategory'

const Home = ({ products, addToFavorites }) => {
    const [selectedType, setSelectedType] = useState()
    const params = useParams();
    const { productsType } = params;
    const handleTypeSelect = (type) => {
        return setSelectedType(type);
    }
    const filteredProductsFunc = (type) => {
        return products.filter((product) => product.type === type);
    }
    const clearFilter = () => {
        setSelectedType(undefined);
    }
    const filteredProducts = selectedType ? filteredProductsFunc(selectedType) : productsType ? filteredProductsFunc(productsType) : products

    return (
        <section className="store__section">
            <div className="container">
                {productsType ? (
                    <ProductsCategory
                        productsType={productsType}
                        filteredProducts={filteredProducts}
                        addToFavorites={addToFavorites}
                    />
                ) : <ProductsHome
                        products={products}
                        filteredProducts={filteredProducts}
                        clearFilter={clearFilter}
                        handleTypeSelect={handleTypeSelect}
                        addToFavorites={addToFavorites}
                        selectedType={selectedType}
                    />}
            </div>
        </section>
    )
}

Home.propTypes = {
    products: PropTypes.array,
    addToFavorites: PropTypes.func,
    setProductsFavorite: PropTypes.func
}
export default Home