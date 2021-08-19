import React from 'react';
import { Route, Switch } from 'react-router-dom'

import '../styles/Header.css'

import header1 from '../images/header1.jpg';
import header2 from '../images/header2.JPG';
import header3 from '../images/header3.jpg';

const Header = () => {
    ````
    return (
        <>
            <Switch>
                <Route path="/" exact render={(() => (
                    <img src={header1} alt='felek1' />
                ))} />
                <Route path="/contact" render={(() => (
                    <img src={header2} alt='felek2' />
                ))} />
                <Route path="/products" render={(() => (
                    <img src={header3} alt='felek3' />
                ))} />
                <Route path="/admin" render={(() => (
                    <img src={header1} alt='felek1' />
                ))} />
                <Route render={(() => (
                    <img src={header1} alt='felek1' />
                ))} />
            </Switch>
        </>
    );
}

export default Header;