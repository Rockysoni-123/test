import React from "react";
function Addtocart(){
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
        console.log(response, "resp")
        const data = await response.json();
        //console.log(data,"data")
        setProduct(data)
    }
    console.log(product, "pro")
    useEffect( 
        () => {
            fetchProducts()
        },[]
    )
    return(
        <div>
            <button className="btn btn-success">cart</button>
        </div>
    )
}