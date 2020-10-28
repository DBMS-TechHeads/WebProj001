import React, { useState } from 'react';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import CreateAccount from './screens/CreateAccount';
import CartScreen from './screens/CartScreen';
import UploadPainting from './screens/UploadPainting';
import Categories from './screens/Categories';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';




import { FaInstagramSquare, FaFacebook, FaGithub, FaTwitter, FaHome, FaSignInAlt, FaShoppingCart,FaInfoCircle} from 'react-icons/fa';
import Category from './screens/Categories';


function App() {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const [loginstatus,setloginstatus]=useState("");
  
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
      setloginstatus(response.data[0].username)
    }
  });
  };

  const Logout = ()=>{
    setloginstatus("");
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
            <div className="others1"><a href="/"><FaHome/> Home</a><a href="#aboutussec" onClick={toggle}><FaInfoCircle/> About Us</a><a href="/"><FaShoppingCart/> Cart</a><button onClick={openNav}><FaSignInAlt/> Sign In</button></div>
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
                    <a href="#">Forgot Password?</a><br/>
                    <Link to={'/signup'}><span onClick={closeNav}>Create an account</span></Link>
                    </div>
                    :
                    <div>
                    <h3 className="Login">Hi {loginstatus}</h3>
                    <button onClick={Logout}>LogOut</button>
                    </div>
              }
        </div>
        
        <main className="main" id="blur">
            
            <div className="content" >
                <Route path="/painting/:id" component={Productscreen}/>
                <Route path="/" exact={true} component={Homescreen}/>
                <Route path ="/signup" component={CreateAccount}/>
                <Route path="/cart/:id?" component={CartScreen}/>
                <Route path="/uploadpainting" component={UploadPainting}/>
                <Route path="/Membership" component={Categories}/>
            </div>
        </main>    

        <div id="popup">
          <h3>ABOUT US</h3>
          <div className="rohit"><img src="/images/rohit.jpg"></img><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span></div>
          <div className="rohit"><img src="/images/manikanta.png"></img><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span></div>
          <div className="rohit"><img src="/images/matan.png"></img><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span></div>
          <div className="rohit"><img src="/images/mohan.png"></img><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></span></div>
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
              <li><a href="">Home</a></li>
              <li><a href="">AboutUs</a></li>
              <li><a href="">ContactUs</a></li>
              <li><a href="">Feedback</a></li>
              
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
