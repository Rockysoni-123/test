import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from './Todo';
//import Products from './Products';
//import Footer from './Footer';
//import Navbar from './Navbar';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Toggle from './Toggle';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import ProductDetail from './ProductDetail';

function App() {
  
  return (
   <>
   <BrowserRouter>
     <Routes>
       
       <Route path='/' element={<Login />}/>
       <Route path='/register' element={<Register />}/> 
       <Route path='/product-description/:productId' element={<ProductDetail />}/>
       <Route path='/products' element={<Home/>}/>
       <Route path='/todos' element={<Todo/>}/>
       
       
     </Routes>
   </BrowserRouter>

    {/*<Navbar/>
     <Products/>
     <Footer/>*/}
    </>
   )
 }

export default App;