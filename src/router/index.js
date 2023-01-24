import { createBrowserRouter,Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../page/home/Home";
import Product from "../page/Product/Product";
import Products from "../page/Products/Products";



const Layout = () =>{
    return(
      <div className='App'>
      <Navbar />
      <Outlet/>
      <Footer/>
     
      </div>
    )
    
  }
export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
                
            },
            {
                path: "/products/:id",
                element: <Products/>
                
            },
            {
                path: "/product/:id",
                element: <Product/>
                
            }

        ]
        
    },
   
])