import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';
import ReactToPdf, {PrintContextConsumer} from 'react-to-pdf';

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
  },[]);


  const returnpaint = (product) =>{
    axios.post('http://localhost:8080/return',{
        product:product
        
    }).then((response) => {
        if(response.data.messages){
            alert("Successfully Rented!!");
            
            }
            else{
              alert("Ensure All Details are Filled!");
            }

      });
};

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  format: [4,2]
};   
      
      return <div>

          <h2>Paintings Currently Rented</h2>
          
        <ul className="bill">
                {
                    products.map(product=>
                    <li>
                   <div className="billno">BiillNo: {product.BillNo}</div>
                   <div className="paint">Painting ID: {product.paintingid}</div>
                   <div className="paint">Rent Date: {product.rentdate}</div>
                   <div className="paint">Return Date:{product.returndate}</div>
                   <div className="paint">Painting Name:{product.paintingname}</div>
                   <img src={product.image} alt="painting1"/>
                   <button className="return" onClick={()=> returnpaint(product)}>Return</button>
                    
                </li>
                        )
                }
            </ul>
                <br/>
            <div ref={ref}>  
            <h2>Paintings Currently Rented</h2>  
            <table>
              <tr>
                <th>BillNo</th>
                <th>PaintID</th>
                <th>Rent Date</th>
                <th>Return Date</th>
                <th>Painting Name</th>
              </tr>
              {
                 products.map(product=>
                  <tr>
                    <td>{product.BillNo}</td>
                   <td>{product.paintingid}</td>
                   <td>{product.rentdate}</td>
                   <td>{product.returndate}</td>
                   <td>{product.paintingname}</td>
                  </tr>
                 )
              }
            </table>
            </div>
            <br/>
            {/* <ReactToPdf targetRef={ref} filename="Paintings_RENT_Bill.pdf" >
        {({toPdf}) => (
            <button id="submit" onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf> */}
</div>

}

export default PaintingHired;