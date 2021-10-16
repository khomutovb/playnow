import React from "react"
import PropTypes from 'prop-types'

const ProductNavigation = ({ items, handleTypeSelect, selectedType, clearFilter }) => {
    return (
        <div className="store__nav">
            <div className="store__filter">
                <div className={"store__filter-item " + (!selectedType ? 'active' : '')} onClick={() => clearFilter()}>Все</div>
                {items && items.map((item) => (
                    <div key={item.type} className={"store__filter-item " + (item.type === selectedType ? 'active' : '')} onClick={() => handleTypeSelect(item.type)}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

ProductNavigation.propTypes = {
    items: PropTypes.array,
    handleTypeSelect: PropTypes.func,
    selectedType: PropTypes.string,
    clearFilter: PropTypes.func,
}
export default ProductNavigation