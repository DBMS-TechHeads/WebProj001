import React, { useState, useEffect }  from 'react';
import Cookie from "js-cookie";
// import { addToCart } from '../actions/cartActions';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import Axios from 'axios';
function CartScreen(props){
  
    // const cart = useSelector(state=> state.cart);
    // const {cartItems} = cart;
    let [cartItems, setItem] = useState([]);
    const week  = props.location.search? Number(props.location.search.split("=")[1]):1;
    

    const removefromcart=(productid)=>{
        console.log(productid);
        cartItems = cartItems.filter(x=>x.id!=productid);
        setItem(cartItems);
    };

    useEffect(()=>{
        const fetchData = async() =>{
          const {data} = await Axios.get("/paintings/"+props.match.params.id);
          
          console.log({data});
          setItem(data);
        }
        fetchData();
        return ()=>{
    
        };
      },[]);


    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(productId){
    //         dispatch(addToCart(productId, week));
    //     }
    // }, []);

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>CART</h3>
                </li>
                {/* <li>Price</li> */}
            <li>
            {
            cartItems.length===0?<div>Cart is empty</div>:
            cartItems.map(item=>
                <div className="img"><img src={item.image}/>
                <div className="cart-name">
                    <div><h4>{item.paintingname}</h4></div>
                    <div><h4>Weeks: {week}</h4></div>
                    <div><h4>Rentcost: Rs{item.rentalcost}</h4></div>
                    <button onClick={(e)=>removefromcart(item.id)}>Delete</button>
                </div>
                </div>
            )}
            </li>
            </ul>
            <div className="cart-action">
            <h3>Total ( {cartItems.reduce((a,c)=>a+week,0)}Weeks): Rs {cartItems.reduce((a,c)=>a+c.rentalcost*week,0)}</h3>
            <button className="" disabled={cartItems.length===0}>Proceed To checkout</button>
            </div>
            </div>
    </div>
}

export default CartScreen;
