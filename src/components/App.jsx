import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from "./Products";
import Cart from "./Cart"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    

    const axios = require('axios').default;

    const [logo, setLogo] = useState({});
    const [productList, setProductList] = useState([
        {
        id: 1,
        name: "Default chair",
        price: 45,
        img: "chair.jpg"
        },
        {
            id: 2,
            name: "Good Chair",
            price: 60,
            img: "GoodChair.jpg"

        },
        {
            id: 3,
            name: "Legally a couch",
            price: 400,
            img: "TheCouch.jpg"
        },
        {
            id: 4,
            name: "Taxed as a Sofa",
            price: 800,
            img: "Sofa.jpg"
        }
    ]);
    const [cart, setCart] = useState([])

    // const getApiFetch = (resource, id) => {
    //     console.log("Calling API")
    //     fetch(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}`: ''}`)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //         setTodos(json);
    //     })
    // }

    // const getApiAxios = () => {
    //     axios.get('')
    //         .then(response => {
    //             console.log(response);
    //             console.log(response.data);
    //             setState(response.data);
    //         })
    //     }

     

    const addToCart = (id) => {
        console.log("Adding " + productList[id-1].name + " to cart")
       setCart([
           ...cart,
           {
            name: productList[id-1].name,
            price: productList[id-1].price

           }
       ])
       console.log(cart);
    }

    const getApiAxios = () => {
        // https://picsum.photos/id/1025/200/500
        // https://picsum.photos/id/1025/info
        axios.get(`https://picsum.photos/id/1025/info`)
            .then(response => {
                setLogo(response.data);
                return
            })
    }

    const emptyCart = () => {
        setCart([]);
    }

    const checkout= (total) => {
        //Who's going to notice an extra 5 cents on their order?
        alert(`Your total is ${total + .05}`);
        setCart([]);
        
    }
    const logLogo = () => {
        console.log(logo);
    }

    return (
        <div>
        <Router>
            <Link to="/">Home  </Link> 
           <Link to="/Products">Products  </Link> 
            <Link to="/Cart">My Cart  </Link>
            {/* <Link to="/comments">Comments</Link> */}

            <Switch>
                <Route path="/Products">
                    <Products products = {productList} addToCart = {addToCart}  />
                </Route>

                <Route path="/Cart">
                    <Cart cart = {cart} checkout = {checkout} getApiAxios = {getApiAxios} logo = {logo} logLogo = {logLogo}/>
                </Route>

                

                <Route exact path="/">
                    <p>Welcome to our store! We don't sell Furniture, we sell Funiture! </p>
                    <p> <button onClick= {getApiAxios}>Click here!</button></p>
                    
                </Route>
            </Switch>
        </Router>

        </div>
        
    );
};
export default App;

