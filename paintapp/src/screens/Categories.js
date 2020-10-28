import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function Categories(props) {

    const [products, setProduct] = useState([]);

    useEffect(()=>{
      const fetchData = async() =>{
        const {data} = await Axios.get("/membership");
        setProduct(data);
      }
      fetchData();
      return ()=>{
  
      };
    },[])

    return<div className="memship">
        <h2>Membership</h2>
        <ul className="memberships">
                {
                    products.map(product=>
                    <li>
                    <div className="category">
                    <div className="cat_name">{product.category}</div>
                    <div className="paint-theme">{product.discount*100}%</div>
                    </div>
                </li>
                        )
                }
            </ul>
    </div>
}

export default Categories;