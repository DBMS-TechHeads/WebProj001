import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import data from '../data';
import { Fade } from 'react-slideshow-image';
import axios from 'axios';


function Homescreen(props){

  const [products, setProduct] = useState([]);
  const [theme, setsearch] = useState([""]);

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/paintings");
      setProduct(data);
    }
    fetchData();
    return ()=>{

    };
  },[])

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
      }
      
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
</div>

}

export default Homescreen;