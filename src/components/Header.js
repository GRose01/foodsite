import React from 'react'

class Header extends React.Component {
    render() {
        return(
        <div id="header">
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About us</a>
                <a href="#products">Products</a>
                <a href="#recipes">Recipes</a>
                <a href="#cart">Cart</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
        )
    }
}

export default Header