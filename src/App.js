import React from 'react';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Logo from "./components/Logo";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import CategoriesPost from "./components/CategoriesPost";
import Footer from "./components/Footer";
import HumburgerMenu from "./components/HumburgerMenu";
import Recipes from "./components/Recipes";
import News from "./components/News";
import SinglePost from "./components/SinglePost";
import About from "./components/About";
import Contact from "./components/Contact";

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

            <Route path="/recipes" render={()=>{
                return <div>
                    <Recipes/>
                </div>
            }}/>

            <Route path="/news" render={()=>{
                return <div>
                    <News/>
                </div>
            }}/>

            <Route path="/single-post" render={()=>{
                return <div>
                    <SinglePost/>
                </div>
            }}/>

            <Route path="/about" render={()=>{
                return <div>
                    <About/>
                </div>
            }}/>

            <Route path="/contact" render={()=>{
                return <div>
                    <Contact/>
                </div>
            }}/>
            
            <Footer/>
        </BrowserRouter>

    );
}

export default App;