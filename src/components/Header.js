import React from 'react';

function Header() {
    return (
        <header>
            <h1>포트폴리오</h1>
            <nav>
                <a href="#about" style={{margin:'0 10px'}}>About</a>
                <a href="#projects" style={{margin:'0 10px'}}>Projects</a>
                <a href="#contact" style={{margin:'0 10px'}}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;