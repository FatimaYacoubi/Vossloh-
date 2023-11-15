import Product from "../product/product"
import background from "./backgrounDd.png"
import "./products.css"
import bg from "./beaut.png"
import "../section1/section1.css"
import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../productredux/productaction";
function Products(){
        const dispatch = useDispatch();
        const products = useSelector((state) => state.productGetReducer.products);
        const bestProducts = products
        ?.sort((a, b) => b.rating - a.rating)
        ?.slice(0, 4);

        useEffect(() => {
                dispatch(getProducts());
              }, [dispatch ]);
              console.log("ena el products" + Array.isArray(bestProducts) );


    
     return(
        <>
    <div style={{ backgroundImage: `url(${bg})` }} className="products">
<h1 align="center" style={{color:"White" ,backgroundColor:"#1d1909",opacity:1}}className="SectionTitle-light">BEST SELLERS</h1>
            <div style={{marginLeft:"100px",marginTop:"100px"}} className="listofproducts Aboutus">
                

            {Array.isArray(bestProducts) && bestProducts.map((p) => (
          <Product product={p} >

          </Product>
        ))}
</div>
        </div> 
        </>
     )
}
export default Products;