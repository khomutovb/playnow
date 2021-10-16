import React from 'react'
import PropTypes from 'prop-types'

const BtnAddToFavorite = ({ item, addToFavorites }) => {
    return (
        <button className="btn__add-favorites" onClick={() => addToFavorites(item._id)}>
            {item.favorite ? (
                <img src="/icons/favorites-blue-active.svg" alt="favorites-blue" />
            ) : (

                    <img src="/icons/favorites-blue.svg" alt="favorites-blue" />
                )
            }
        </button>
    )
}

BtnAddToFavorite.propTypes = {
    item: PropTypes.object,
    addToFavorites: PropTypes.func,
}
export default BtnAddToFavorite