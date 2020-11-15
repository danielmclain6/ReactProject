import React, { useEffect } from 'react';

const Cart = (props) => {
    let total = 0;
    useEffect(() => {
        props.getApiAxios();
    }, [])
    
props.cart.forEach((product) =>  {

    

    const logLogo = () => {
        console.log(props.logo);
    }
        total += product.price })

    if(props.cart.length !== 0){
    return (
        <div>
        <ul>
            
        {props.cart.map((product, index) => {
            return <li key={index}>
                {product.name}.  Price: ${product.price}
        
            </li>

            
            
        })}
       <br></br>
       <br></br>
       <br></br>
       Your total is: ${total}
        
    </ul>
    <button onClick = {() => props.checkout(total)}>Click here to checkout</button>
    </div>
    
    );
    } else  {
        return (
          <div>  
        <p> Please buy stuff, we need to eat.</p>
        <p>If you buy enough you'll be able to buy a warm blanket for our mascot, Oscar</p>
        <img src = {props.logo.download_url} alt = "some random dog lol" height = "200" width = "300"></img>
        </div>
        )}
      
};

export default Cart;