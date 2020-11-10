import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';


function PaintingHired(props){

  const [products, setProduct] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/paintinghired");
      setProduct(data);
    }
    fetchData();
    return ()=>{

    };
  },[])

 
      
      return <div>

          <h2>Paintings Rented</h2>
          
        <ul className="products">
                {
                    products.map(product=>
                    <li>
                   <div className="">{product.BillNo}</div>
                   <div className="">{product.paintingid}</div>
                   <div className="">{product.rentdate}</div>
                   <div className="">{product.returndate}</div>
                    
                </li>
                        )
                }
            </ul>
</div>

}

export default PaintingHired;