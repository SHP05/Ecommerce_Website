import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./product.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavbarNew/NavbarResp";

const Products = () => {
    const [data, setData] = useState([]);
    const [filters, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filters)
                console.log(data)
            }

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <Skeleton />
            </>
        )
    }
    
    const filterProducts = (cat) => {
        const updataData = data.filter((x) => x.category === cat);
        setFilter(updataData);
    }
    
    // const [serch,setSerch] = useState([]);
    // const [message,setMessage] = useState('');
    //below function for serch product
    // const handleSerch = (event) => {
    //     setMessage(event.target.value);
    //   };
    
    //   const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //       // 👇 Get input value
    //     const serch = data.filter((x)=> x === event.target.value);
    //     setSerch(serch);
    //     console.log(serch);
    //     }
    //   };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-evenly mb-5 pb-5">
                    <button className="button-28 me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="button-28 me-2" onClick={() => filterProducts("men's clothing")}>Man's Cloth</button>
                    <button className="button-28 me-2" onClick={() => filterProducts("women's clothing")}>Women's cloth</button>
                    <button className="button-28 me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className="button-28 me-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                    <div class="serch-container">
                        <input className="input" placeholder="serch products"/>
                        {/* <input type="text" class="input" value='' placeholder="Serch Product"/> */}
                        <label class="label">Username</label>
                    </div>
                </div>

                <div className="main-container">
                {filters.map((product) => {
                    return (
                        <>
                            <div className="card-wrapper">
                                <div className="cards">
                                    <div className="image-wrapper">
                                        <img src={product.image} alt="product" />
                                    </div>
                                    <div className="content-wrapper" key={product.id}>
                                        <div className="title">
                                            <h4>{product.title.substring(0,20)}...</h4>
                                        </div>
                                        <div className="price">
                                            ${product.price}
                                        </div>
                                        <div className="actions">
                                            <NavLink to={`/products/${product.id}`}>
                                                <button id="cart" className="button flip green-solid cart">
                                                    <span className="front">Buy Now</span>
                                                    <span className="backside">Added</span>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
                </div>              
            </>
        )
    }
    return (
        <>
        <Navbar/>
        {
            loading ? 
            <div className="loader-container">
                <div class="custom-loader"></div>
            </div>
            :
            <main>
            <div>
                <div className="py-5 my-5 products w-100 p-3">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">Products</h1>
                            <center><hr width="12%" /></center>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
                <Footer/>
            </div>
            </main>
        }
        </>
    )
}

export default Products;