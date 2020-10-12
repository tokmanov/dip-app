import React from 'react';
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";
import Logo from "./components/Logo";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import CategoriesPost from "./components/CategoriesPost";
import Footer from "./components/Footer";
import HumburgerMenu from "./components/HumburgerMenu";

function App() {
    return (
        <BrowserRouter>
            <div id="preloder">
                <div class="loader"></div>
            </div>
           <HumburgerMenu/>
            <Menu/>
            <Logo/>
            <Carousel/>
            <Route path="/" render={()=>{
                return <div>
                    <CategoriesPost/>
                </div>
            }}/>
            <Footer/>
        </BrowserRouter>

    );
}

export default App;