import React, { useState, useEffect }  from 'react';
// import data from '../data';
import {Link} from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import axios from 'axios';


function Productscreen(props){
    const [week,setweek] = useState(1);
    const [products, setProduct] = useState([]);
    const [hired, setHired] = useState("");


  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await axios.get("/paintings/"+props.match.params.id);
      console.log(data[0]);
      setProduct(data);
      setHired(data[0].hired);
    }
    fetchData();
    return ()=>{

    };
  },[]);

  const handleAddToCart = () =>{
      props.history.push("/cart/"+ props.match.params.id + "?week="+week);
  }

    // const product = data.product.find(x => x._id === props.match.params.id);
    return <div>
        <div className="Backbutt"><Link to={'/'}><p><FaBackward/>&nbsp;&nbsp;Back to result</p></Link></div>
        <div className="details">
            {products.map(product=>
            <div className="details-image"><img src={product.image} alt="product"/></div>
            )}
            
            <div className="details-info">
            {products.map(product=>
                <ul>
                    <li>
                        <h3>{product.paintingname}</h3>
                    </li>
                    <li>Artist: {product.artistname}</li>
                    <li>Description: {product.description}</li>
                </ul>
            )}
            </div>
            <div className="details-action">
            {products.map(product=>
                <ul className="products-info">
                    <li>Rental Price :{product.rentalcost}</li>
                    <li>Weeks to hire:
                        <select className="weeks" value={week} onChange={(e)=> {setweek(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    {hired==="n" || hired==="" || hired==null?
                    <li><button onClick={handleAddToCart}>Add to cart</button></li>
                    :
                    <h3>Painting Hired!!</h3>
                }
                    
                </ul>
            )}
            </div>
            
        </div>
        </div>
}

export default Productscreen;