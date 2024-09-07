import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <a href="https://www.greetsu.com/" target="_blank" rel="noreferrer">
                    <img src="/1.png" alt="Logo" className="header-logo" />
                </a>
            </div>
            <div className="header-text">
                <p>
                    <span className='Loveto'>Loveto</span>
                    <span className='create'> Create your love timeline</span>
                </p>
                <p>
                    <span className='powered'>Powered by</span>
                    <span className="logo">
                        <img src="/1.svg" alt="Logo" className="header-logo1" />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Header;