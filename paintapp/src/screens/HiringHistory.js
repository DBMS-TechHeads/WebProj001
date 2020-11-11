import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';


function HiringHistory(props){

  const [products, setProduct] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/Hiringhistory");
      setProduct(data);
    }
    fetchData();
    return ()=>{

    };
  },[])

 
      
      return <div>

          <h2>Paintings Rental History</h2>
          
        <ul className="bill">
                {
                    products.map(product=>
                    <li>
                   <div className="billno">BiillNo: {product.BillNo}</div>
                   <div className="paint">Painting ID: {product.paintingid}</div>
                   <div className="paint">Rent Date: {product.rentdate}</div>
                   <div className="paint">Return Date:{product.returndate}</div>
                   <div className="paint">Painting Name:{product.paintingname}</div>
                   <div className="paint">Returned:{product.Returned}</div>
                   
                   <img src={product.image} alt="painting1"/>
                    
                </li>
                        )
                }
            </ul>
</div>

}

export default HiringHistory;