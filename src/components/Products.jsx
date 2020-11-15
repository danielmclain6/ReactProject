import React, { useEffect, useState } from 'react';
import useGetApi from './useGetApi';

const Products = props => {

    // const [todos, setTodos] = useState([]);

    // const getApi = useGetApi();

    // useEffect(() => {
    //     // props.getApi('todos');
    //     getApi("todos").then(response => {
    //         setTodos(response.data);
    //     })
    //     return () => {
    //         props.clearState();
    //         setTodos([]);
    //     }
    // },[]);

    return (
        
        <ul>
            {props.products.map(product => {
                       
                return <li key={product.id}>
                    <img src = {product.img} alt = ""width = "100" height = "100"/>
                   <div> {product.name}  </div>
                   <div>Price: {product.price} </div>  
                    <button onClick= {() => props.addToCart(product.id)}>Add to Cart</button>
                    <hr></hr>
                </li>
                
            })}
            
        </ul>
    );
};

export default Products;