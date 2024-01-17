import React from "react";
import "./home.css"
import Products from "../Product/Products";
import Navbar from "../Navbar/NavbarNew/NavbarResp";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main>
                <Navbar />
                <div className="backgraound">
                    <div className="container">
                        <h1> New Arrivals </h1>
                        <h3>Discover a world of quality products designed</h3>
                        <h3>Elevate your Lifestyle with our collections</h3>
                        <NavLink to="/products"><button className="button-28">Shop Now</button></NavLink>
                    </div>
                </div>
                <div className="offers">
                    <img src="cloth2.png" alt="cloths" />
                    <img src="shoes.jpg" alt="shoes" />
                </div>
                <Products />
            </main>
        </>
    )
}
export default Home;