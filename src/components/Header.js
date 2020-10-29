import React from "react";

function Header() {
    return (
        <header className = "Header"> 
        <div>
            <h1> Home: Midterm </h1>
        </div>
        <nav>
            <a href="/?state=California">California</a>
            <a href="/?state=New_York">New York</a>
            <a href="/?state=Illinois">Illinois</a>
            <a href="/?state=Florida">Florida</a>
        </nav>
        </header>
    );
}

export default Header;