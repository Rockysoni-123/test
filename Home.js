import React, { useState, useEffect } from "react"
import Products from './Products';
import { Link } from "react-router-dom";
function Home() {
    const [products, setProducts] = useState([])
    const [counter, setCounter] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [category, setCategory] = useState("all")
    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response, "resp")
        const data = await response.json();
        //console.log(data,"data")
        setProducts(data);
        setFilteredProducts(data);
    }
    //console.log(products,"prod")
    useEffect(
        () => {
            fetchProducts()
            console.log("useeffect is called")
        }, [counter]
    )
    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    console.log(category, "category");
    useEffect(() => {
        if (category === "all") {
            setFilteredProducts(products)
        } else if (category === "Men") {
            const categoryProduct = products.filter((item, index) => item.category === "men's clothing")
            setFilteredProducts(categoryProduct)
        } else if (category === "Women") {
            const categoryProduct = products.filter((item, index) => item.category === "women's clothing")
            setFilteredProducts(categoryProduct)
        } else if (category === "jewellary") {
            const categoryProduct = products.filter((item, index) => item.category === "jewelery")
            setFilteredProducts(categoryProduct)
        } else if (category === "eletronics") {
            const categoryProduct = products.filter((item, index) => item.category === "electronics")
            setFilteredProducts(categoryProduct)
        }
    }, [category])
    return (
        
            <div>
                
                <span class="border border-black" text-center mt-2 mb-2></span>
                <h1 className=" text-center mt-4 mb-5">products </h1>
                <button className='text-center mt-2 mb-2'>
                    <div className='text-center mt-2 mb-2'>
                        <div><Link to='/'>login page</Link></div>
                        <div><Link to='/register'>register page</Link></div>
                        <div><Link to='/products'>Home page</Link></div>
                        <div><Link to='/todos'>todos page</Link></div>
                    </div>
                </button>
                <div>
                    <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                 </svg></h1></div>
                    <div className='mb-3'>
                    
                    <button className="btn btn-warning ms-2" onClick={() => setCategory('all')}>ALL</button>
                    <button className="btn btn-warning ms-2" onClick={() => setCategory('Men')}>Mens</button>
                    <button className="btn btn-warning ms-2" onClick={() => setCategory('Women')}>Womens</button>
                    <button className="btn btn-warning ms-2" onClick={() => setCategory('jewellary')}>Jewellary</button>
                    <button className="btn btn-warning ms-2" onClick={() => setCategory('eletronics')}>Eletronics</button>
                </div>
                <div className='row'>
                    {
                         
                        filteredProducts.map((item, index) => (
                            
                            <div className='col-3 border d-flex justify-content-center flex-column align-items-center '
                                key={index}
                            >
                                <div>
                                    {
                                        item.title
                                    }
                                </div>
                                <Link to={`/product-description/${item.id}`}>
                                    <img
                                        src={item.image}
                                        alt=""
                                        width={100}
                                    />
                                </Link>
                                <p>${item.price}</p>
                                <button className='btn btn-primary'>Add to cart</button>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
            )
            
            
}
            export default Home;