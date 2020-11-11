import React, { useState, useEffect }  from 'react';
// import data from '../data';
import {Link} from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import Axios from 'axios';
import App from '../App.js';


function Productscreen(props){
    const [week,setweek] = useState(1);
    const [products, setProduct] = useState([]);
    const [hired, setHired] = useState("");
    const [Rdate, setdate] = useState("");
    const [pname, setPName] = useState("");
    const [image, setPimage] = useState("");    

  useEffect(()=>{
    const fetchData = async() =>{
      const {data} = await Axios.get("/paintings/"+props.match.params.id);
      console.log(data[0]);
      setProduct(data);
      setHired(data[0].hired);
      setPName(data[0].paintingname);
      setPimage(data[0].image);
    }
    fetchData();
    return ()=>{

    };
  },[]);

//   const handleAddToCart = () =>{
        
//       props.history.push("/cart/"+ props.match.params.id + "?week="+week + "?date="+Rdate);
  
// }

    // const product = data.product.find(x => x._id === props.match.params.id);

    const rent = () =>{
        Axios.post('http://localhost:8080/rent',{
            returndate:Rdate,
            paintingid:props.match.params.id,
            pname:pname,
            image:image
            
        }).then((response) => {
            if(response.data.messages){
                alert("Successfully Rented!!");
                
                }
                else{
                  alert("Ensure All Details are Filled!");
                }

          });
    };

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
                    {/* <li>Weeks to hire:
                        <select className="weeks" value={week} onChange={(e)=> {setweek(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li> */}
                    <input className="weeks" type="text" placeholder="(yyyy-mm-dd)" id="rdate" required onChange={(e) => {
            setdate(e.target.value);
          }}/>
                    {hired==="n" || hired==="" || hired==null?
                    <li><button onClick={rent}>Rent Painting</button></li>
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