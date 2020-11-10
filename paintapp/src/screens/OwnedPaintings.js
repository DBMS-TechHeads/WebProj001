import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';


function OwnedPaintings(props){

  const [products, setProduct] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/ownedpaintings");
      setProduct(data);
    }
    fetchData();
    return ()=>{

    };
  },[])

 
      
      return <div>

        <h2>Paintings Owned</h2>
          
        <ul className="products">
                {
                    products.map(product=>
                    <li>
                    <div className="product">
                    <img src={product.image} alt="painting1"/>
                   <div className="paint-name">{product.paintingname}</div>
                    <div className="paint-artist">Artist: {product.artistname}</div>
                    <div className="paint-theme">Theme: {product.theme}</div>
                    <div className="paint-price">Rs {product.rentalcost}</div>
                    </div>
                </li>
                        )
                }
            </ul>
</div>

}

export default OwnedPaintings;