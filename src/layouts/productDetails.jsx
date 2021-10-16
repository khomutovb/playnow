import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import BtnAddToFavorite from '../components/btnAddToFavorite'

const ProductDetails = ({ products, addToFavorites }) => {
    const params = useParams();
    const { productId, productsType } = params;
    const [product, setProduct] = useState();
    useEffect(() => {
        setProduct([].concat(...products.map(product => product.productsList)).find((item) => item._id === productId));
    }, [products]);

    return (
        <>
            {product ? (
                <section className="product__page">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to='/'>Главная</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={`/${productsType}`}>{product.category}</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                            </ul>
                        </nav>
                        <div className={"product__page-row " + productsType}>
                            <div className="product__page-img">
                                <img src={product.img} alt="product-img" />
                            </div>
                            <div className="product__page-details">
                                <p className="product__details-title">{product.name}</p>
                                <p className="product__details-description">{product.description}</p>
                            </div>
                            <div className="product__page-buy">
                                <p className="product__code">Код: {product._id}</p>
                                <p className="product__page-price">{product.price} ₴</p>
                                <div className="product__buttons">
                                    <button className="product__buy">Купить</button>
                                    <BtnAddToFavorite item={product} addToFavorites={addToFavorites} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                    <div className="loading">Загрузка...</div>
                )
            }
        </>
    )
}

ProductDetails.propTypes = {
    products: PropTypes.array,
    addToFavorites: PropTypes.func
}
export default ProductDetails