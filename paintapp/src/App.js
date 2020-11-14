import React, { useState } from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import CreateAccount from './screens/CreateAccount';
import CartScreen from './screens/CartScreen';
import UploadPainting from './screens/UploadPainting';
import OwnedPaintings from './screens/OwnedPaintings';
import RentPainting from './screens/RentPainting';
import Categories from './screens/Categories';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';




import { FaInstagramSquare, FaFacebook, FaGithub, FaTwitter, FaHome, FaSignInAlt, FaPen,FaInfoCircle, FaUpload, FaHistory, FaListUl, FaAngleRight,FaGrinBeam,FaSignOutAlt} from 'react-icons/fa';
import PaintingHired from './screens/PaintingsHired';
import HiringHistory from './screens/HiringHistory';





function App() {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const [loginstatus,setloginstatus]=useState("");
  const [IDstatus,setIDstatus]=useState("");
  const[Fnamestatus,setFnametatus] = useState("");
  const[Lnamestatus, setLnamestatus] = useState("");
  const[addStatus,setAddressstatus] = useState("");
  const[PHNUMstatus,setPHNUMstatus] = useState("");
  const[emailStatus,setemailstatus] = useState("");
  const[TypeStatus,setTYPEstatus] = useState("");
  const[CATStatus,setCATstatus] = useState("");
  
  
      const login = () =>{
    Axios.post('http://localhost:8080/login',{
      username:username,
      password:password,
  }).then((response)=>{
    console.log(response.data);
    if(response.data.messages){
    alert("Invalid Username or Password");
    setloginstatus(response.data.messages)
    }
    else{
      setloginstatus(response.data[0].username);
      setIDstatus(response.data[0].type);
      setFnametatus(response.data[0].Fname);
      setLnamestatus(response.data[0].Lname);
      setAddressstatus(response.data[0].address);
      setPHNUMstatus(response.data[0].phonenumber);
      setemailstatus(response.data[0].emailid);
      setTYPEstatus(response.data[0].type);
      if(response.data[0].type=="Customer"){
        setCATstatus(response.data[0].category);

      }
    }
  });
  };

  const Logout = ()=>{
    setloginstatus("");
    setIDstatus("");
    Axios.post('http://localhost:8080/logout',{
      loginstatus:loginstatus,
      IDstatus:IDstatus
  }).then((response)=>{
    
  });
  }

  const openNav = ()=>{
    if (
      document.getElementById("mysidebar")
    ) 
  document.getElementById("mysidebar").style.width = "30.5rem";
  };

  const closeNav = ()=>{
    if (
      document.getElementById("mysidebar")
    ) 
  document.getElementById("mysidebar").style.width = "0";
  };
  
  const toggle = () =>{
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <div className="navbar">  
            <div className="brand"><img src="/images/logo.png"/><Link to="/">Paintorzo</Link></div>
            <div className="others1">
                <Link to="/"><FaHome/> Home</Link>
                <a href="#aboutussec" onClick={toggle}><FaInfoCircle/> About Us</a>
                {/* <Link to="/"><FaShoppingCart/> Cart</Link> */}
                <button onClick={openNav}><FaSignInAlt/> Sign In</button></div>
        </div>
        
        <div className="sidebar" id="mysidebar">
            <button className="closebtn" onClick={closeNav}>&times;</button>

            {loginstatus==="Wrong USERNAME OR PASSWORD" || loginstatus.length===0?
                <div>
                <h2>Sign In</h2>
                
                    <input type="text" placeholder="Username" id="uname" spellCheck='false' onChange={(e) => {
                setusername(e.target.value);
              }}/>
                    <input type="password" name="" placeholder="Password" id="password" spellCheck='false' onChange={(e) => {
                setpassword(e.target.value);
              }}/>
                    <button id="submit" onClick={login}>Submit</button><br/>
                    {/* <a href="#">Forgot Password?</a><br/> */}
                    <Link to={'/signup'}><span onClick={closeNav}><FaPen/>&nbsp;Create an account?</span></Link>
                    </div>
                    :
                    <div>
                    <h3 className="Login">Hey {loginstatus}!&nbsp;<FaGrinBeam/></h3>
                    {IDstatus==="Owner"?
                    <div>
                      <p className="Profile">
                      <h3>Profile</h3><br/>
                      <h4>First Name: {Fnamestatus}</h4><br/>
                      <h4>Last Name: {Lnamestatus}</h4><br/>
                      <h4>Address: {addStatus}</h4><br/>
                      <h4>Phone Number: {PHNUMstatus}</h4><br/>
                      <h4>Email ID: {emailStatus}</h4><br/>

                      </p>
                      <Link to="/uploadpainting"><FaUpload/>&nbsp; Upload Painting</Link><br/>
                    <Link to="/ownedpaintings"><FaListUl/>&nbsp; Owned Paintings</Link><br/>
                    <Link to="/rentpainting"><FaAngleRight/>&nbsp; Owned Paintings Rented</Link><br/>
                    </div>
                      :
                    <div>
                      <p className="Profile">
                      <h3>Profile</h3><br/>
                      <h4>First Name: {Fnamestatus}</h4><br/>
                      <h4>Last Name: {Lnamestatus}</h4><br/>
                      <h4>Address: {addStatus}</h4><br/>
                      <h4>Phone Number: {PHNUMstatus}</h4><br/>
                      <h4>Email ID: {emailStatus}</h4><br/>
                      <h4>Membership Type: {CATStatus}</h4><br/>
                      </p>
                      <br/>
                      <Link to="/Membership"><FaAngleRight/>&nbsp; Membership categories</Link><br/>
                      <Link to="/paintinghired"><FaListUl/>&nbsp; Paintings Hired</Link><br/>
                      <Link to="/Hiringhistory"><FaHistory/>&nbsp; Rental History</Link>
                      <br/>
                      <br/>
                    </div>
                    }
                    <Link to="/"><button id="logout" onClick={Logout}><FaSignOutAlt/>LogOut</button></Link>
                    </div>
              }
        </div>
        
        <main className="main" id="blur">
            
            <div className="content" >
                <Route path="/painting/:id" component={Productscreen}/>
                <Route path="/" exact={true} component={Homescreen}/>
                <Route path ="/signup" component={CreateAccount}/>
                {/* <Route path="/cart/:id?" component={CartScreen}/> */}
                <Route path="/uploadpainting" component={UploadPainting}/>
                <Route path="/ownedpaintings" component={OwnedPaintings}/>
                <Route path="/rentpainting" component={RentPainting}/>
                <Route path="/paintinghired" component={PaintingHired}/>
                <Route path="/Hiringhistory" component={HiringHistory}/>
                <Route path="/Membership" component={Categories}/>
            </div>
        </main>    

        <div id="popup">
          <h3>ABOUT US</h3>
          <div className="rohit"><img src="/images/rohit.jpg"></img><span><p><h4>A T Rohit Surya</h4><i><h5>atinvento@gmail.com</h5></i></p></span></div>
          <div className="rohit"><img src="/images/manikanta.png"></img><span><p><h4>M Manikanta Reddy</h4><i><h5>marri.mani2000@gmail.com</h5></i></p></span></div>
          <div className="rohit"><img src="/images/matan.png"></img><span><p><h4>Masthan</h4><i><h5>masthanirfan037@gmail.com</h5></i></p></span></div>
          <div className="rohit"><img src="/images/mohan.png"></img><span><p><h4>R Mohan</h4><i><h5>mohanreddybathuni@gmail.com</h5></i></p></span></div>
          <a href="#aboutussec" onClick={toggle} className="dismiss">DISMISS</a>
          </div>


<footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Happy to start out painting business online , made easy to contact with all the other 
                            business people.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="#aboutussec" onClick={toggle}>AboutUs</Link></li>
              <li><Link to="">ContactUs</Link></li>
              <li><Link to="">Feedback</Link></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; Painting is not a joke its like profession. 
         <a href="/">Paintorzo</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FaFacebook/></a></li>
              <li><a className="twitter" href="#"><FaTwitter/></a></li>
              <li><a className="instragram" href="#"><FaInstagramSquare/></a></li>
              <li><a className="github" href="#"><FaGithub/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
