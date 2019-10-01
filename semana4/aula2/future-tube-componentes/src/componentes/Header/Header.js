import React from 'react';
import './Header.css';

export function Header() {
    return (
        <header>
            <h1>FutureTube</h1>
            <input type="search" placeholder="buscar" name="search" />
        </header>
    )
}