import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Упс, что-то пошло не так...</p>
            <Link to='/' className="btn__back-home">Вернуться на главную</Link>
        </div>
    )
}

export default NotFound