import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaFilePdf} from 'react-icons/fa';

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
  },[]);

const ref = useRef();
const options = {
  orientation: 'landscape'
};   
const handlePrint = useReactToPrint({
  content: () => ref.current,
});

 
      
      return <div>

        <h2>Paintings Owned</h2>
          
        <ul className="ownedpainting">
                {
                    products.map(product=>
                    <li>
                    {/* <div className="product"> */}
                    <img src={product.image} alt="painting1"/>
                   <div className="paint-name">{product.paintingname}</div>
                    <div className="paint-artist">Artist: {product.artistname}</div>
                    <div className="paint-theme">Theme: {product.theme}</div>
                    <div className="paint-price">Rs {product.rentalcost}</div>
                    <div className="paint-theme">Hired: {product.hired}</div>
                    {/* </div> */}
                </li>
                        )
                }
            </ul>

            {products.length==0?    
            <h2>No Paintings Hired</h2>
            :
            <div>
            <div className="BillPDF" ref={ref}>
            <h3>Paintorzo</h3><br/>
            <h4>Paintings Owned</h4>
            <h5>List of painting owned / uploaded to Paintirzo Gallery</h5>
            
            <table>
              <tr>
                <th>Painting Name</th>
                <th>Artist</th>
                <th>Theme</th>
                <th>Price</th>
                <th>Hired(y/n)</th>
              </tr>
              {
                 products.map(product=>
                  <tr>
                    <td>{product.paintingname}</td>
                   <td>{product.artistname}</td>
                   <td>{product.theme}</td>
                   <td>{product.rentalcost}</td>
                   <td>{product.hired}</td>
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

export default OwnedPaintings;