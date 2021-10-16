import React, { useState, useEffect } from 'react'
import api from './api'
import { Route, Switch } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Products from './layouts/products'
import ProductDetails from './layouts/productDetails'
import NotFound from './layouts/notFound'
import ScrollToTop from './components/scrollToTop'
import Favorites from './layouts/favorites'

function App() {
    const [products, setProducts] = useState([]);
    const [productsFavorite, setProductsFavorite] = useState();
    const [productsFavoriteLength, setProductsFavoriteLength] = useState(0);
    useEffect(() => {
        api.products.fetchAll().then((data) => setProducts(data));
    }, [])
    useEffect(() => {
        setProductsFavorite(products.map((item) => item ? {
            ...item,
            productsList: item.productsList.filter((product) => product.favorite)
        } : item));
        setProductsFavoriteLength([].concat(...products.map(product => product.productsList)).filter((item) => item.favorite).length);
    }, [products])
    const addToFavorites = (id) => {
        return setProducts(products.map((item) => item ? {
            ...item,
            productsList: item.productsList.map((product) => product._id === id ? {
                ...product,
                favorite: !product.favorite,
            } : product)
        } : item));
    }

    return (
        <>
            <Header productsFavoriteLength={productsFavoriteLength} />
            <ScrollToTop />
            <Switch>
                <Route exact path="/login" component={NotFound} />
                <Route exact path="/favorites"
                    render={() =>
                        <Favorites
                            productsFavoriteLength={productsFavoriteLength}
                            productsFavorite={productsFavorite}
                            addToFavorites={addToFavorites}
                        />
                    }
                />
                <Route exact path="/:productsType?"
                    render={() =>
                        <Products
                            products={products}
                            addToFavorites={addToFavorites}
                        />
                    }
                />
                <Route exact path="/:productsType?/:productId?"
                    render={() =>
                        <ProductDetails
                            products={products}
                            addToFavorites={addToFavorites}
                        />
                    }
                />
            </Switch>
            <Footer />
        </>
    );
}

export default App