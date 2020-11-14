import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaFilePdf} from 'react-icons/fa';

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

const ref = useRef();
const options = {
  orientation: 'landscape'
};   
const handlePrint = useReactToPrint({
  content: () => ref.current,
});
      
      return <div>

          <h3 className="Billhead">Paintings Currently Rented</h3>
          
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
            {products.length==0?    
            <h2>No Paintings Hired</h2>
            :
            <div>
            <div className="BillPDF" ref={ref}>
            <h3>Paintorzo</h3><br/>
            <h4>Paintings currently Hired</h4>
            <h5>List of painting rented from our painting gallery...</h5>
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
            <br/>
            <h5>From Paintorzo team....</h5><br/>
            <h5>Contact us for futher queries</h5>
            <h5><i>emailid: masthanmasthi037@gmail.com</i></h5>
            </div>
            <br/>
            
            <button id="pdfgen" onClick={handlePrint}><FaFilePdf/>Generate pdf</button>
            </div>
            }
</div>

}

export default PaintingHired;