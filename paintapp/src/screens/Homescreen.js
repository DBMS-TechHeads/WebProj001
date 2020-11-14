import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import BarChart from 'react-bar-chart';
import { FaFilePdf} from 'react-icons/fa';

function Homescreen(props){

  const [products, setProduct] = useState([]);
  const [customers, setCustomer] = useState([]);
  const [owners, setOwner] = useState([]);
  const datas = 
  [
    {text: 'Customer',value:customers.length},
    {text: 'Owner',value:owners.length}
  ]
  
  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/paintings");
      console.log(data);
      setProduct(data);
      
    }
    fetchData();
    return ()=>{

    };
  },[]);

  useEffect(()=>{
    const fetchData = async() =>{
    
      const {data} = await axios.get("/customers");
      console.log(data);
      setCustomer(data);
    }
    fetchData();
    return ()=>{

    };
  },[]);

  useEffect(()=>{
    const fetchData = async() =>{
    
      const {data} = await axios.get("/countOwner");
      setOwner(data);
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

const margin = {top: 20, right: 20, bottom: 30, left: 40};

    const fadeImages = [
        'images/pic.jpg',
        'images/pic2.jpg',
        'images/pic3.jpg',
        'images/pic4.png',
        'images/pic5.jpg'
      ];
      
      const fadeProperties = {
        duration: 2000,
        transitionDuration: 2000,
        infinite: true,
        indicators: false,
        arrows: false,
        onChange: (oldIndex, newIndex) => {
          console.log(`fade transition from ${oldIndex} to ${newIndex}`);
        }
      };

     
      
      return <div>
          <div className="slide-container">
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[0]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[1]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[2]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[3]} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[4]} />
                </div>
              </div>
            </Fade>
          </div>
      
    <br/>
        <div className="centered"><h1>Paintorzo</h1><p>"The place where you can find the finest paintings by famous artists at your finger tips.."</p></div>
        <h2>Painting Gallery</h2>
        
        <ul className="products">
                {
                    products.map(product=>
                    <li>
                    <div className="product">
                    <Link to={'/painting/'+product.paintingid}><img src={product.image} alt="painting1"/></Link>
                   <div className="paint-name"><Link to={'/painting/'+product.paintingid}>{product.paintingname}</Link></div>
                    <div className="paint-artist">Artist: {product.artistname}</div>
                    <div className="paint-theme">Theme: {product.theme}</div>
                    <div className="paint-price">Rs {product.rentalcost}</div>
                    </div>
                </li>
                        )
                }
            </ul>

            <br/><br/><br/>
            <div>
            <div className="BillPDF" ref={ref}>
            <h3>Paintorzo</h3><br/>
            <h4>Paintings Gallery</h4>
            <h5>List of painting available in our Paintirzo Gallery</h5>
            
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
            <h4>Customer and Owner count</h4>
            <div> 
                <BarChart ylabel='Number of Customers or Owners' 
                  width={500}
                  height={500}
                  margin={margin}
                  data={datas}
                  />
            </div>
            <h5>Also create an account today for free and explore our services...</h5>
            <br/>
            <h5>If intersested can contribute with no additional costs.</h5>
            <h5>From Paintorzo team....</h5><br/>
            <h5>Contact us for futher queries</h5>
            <h5><i>emailid: masthanmasthi037@gmail.com</i></h5>
            </div>
            <br/>
            
            <button id="pdfgen" onClick={handlePrint}><FaFilePdf/>Generate pdf</button>
            </div>

           
</div>

}

export default Homescreen;