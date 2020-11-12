import React, { useState } from 'react';
import Axios from 'axios';


function CreateAccount(props){
    const [Firstnameca, setFirstnameca] = useState("");
    const [Lastnameca, setLastnameca] = useState("");
    const [usernameca, setUsernameca] = useState("");
    const [emailidca, setEmailidca] = useState("");
    const [addressca, setAddressca] = useState("");
    const [Dobca, setDobca] = useState("");
    const [phnoca, setPhnoca] = useState("");
    const [passwordca, setPasswordca] = useState("");
    const [typeca,setTypeca]= useState("");
    const [category,setcategoryca]= useState("");
    const [confirmpass,setConfirmca] = useState("");
     
    const register = () =>{
        Axios.post('http://localhost:8080/userinfo',{
            Firstname:Firstnameca,
            Lastname:Lastnameca, 
            username:usernameca, 
            emailid:emailidca, 
            address:addressca, 
            dob:Dobca, 
            phno:phnoca, 
            password:passwordca, 
            type:typeca,
            category:category,
            confirmpass:confirmpass
        }).then((response) => {
            if(response.data.messages){
                alert("Account Successfully created");
                
                }
                else if(response.data.required){
                    alert("Please fill all Fields!!");
                }
                else if(response.data.pass){
                    alert("Ensure Password entered Matches!!!");
                }
                else if(response.data.phno){
                    alert("Ensure to enter correct Phone number!!!");
                }
                else{
                  alert("Account Not Created");
                }

          });
    };
    


    return <div className="newaccount">
        <img src="/images/newaccount.jpg"/>
        <h1>Create new Account</h1>
        <div>
            <div className="accountform"> 
                <input type="text" placeholder="FirstName" id="fname" required onChange={(e) => {
            setFirstnameca(e.target.value);
          }}/>
                <input type="text" name="" placeholder="LastName" id="lname" required onChange={(e) => {
            setLastnameca(e.target.value);
          }}/><br/>
                <input type="text" placeholder="Username" id="username" required onChange={(e) => {
             setUsernameca(e.target.value);
          }} /><br/>
                <input type="email" name="" placeholder="emailid" id="emailid" required onChange={(e) => {
            setEmailidca(e.target.value);
          }} /><br/>
                <input type="text" placeholder="address" id="address" required onChange={(e) => {
            setAddressca(e.target.value);
          }} /><br/>
                <input type="text" placeholder="DOB(yyyy-mm-dd)" id="dob" required onChange={(e) => {
            setDobca(e.target.value);
          }} /><br/>
                <input type="text" placeholder="Phone Number" id="phno" required onChange={(e) => {
            setPhnoca(e.target.value);
          }} /><br/>
                <input type="password" name="" placeholder="Password" id="pass" required onChange={(e) => {
            setPasswordca(e.target.value);
          }} /><br/>
                <input type="password" name="" placeholder="Confirm Password" id="confirmpass" onChange={(e) => {
            setConfirmca(e.target.value);
          }}/><br/>
                <label id="labeltype">How would you like to use this Website? </label>
                <select className="type" required onChange={(e) => {
            setTypeca(e.target.value);
          }} >
                    <option>Rent Paintings</option>
                    <option>Post Paintings</option>
                </select>
                <br/>
                <label id="memtype">Membership Type: </label>
                <select className="membership" required onChange={(e) => {
            setcategoryca(e.target.value);}}>
                    <option>Bronze</option>
                    <option>Silver</option>
                    <option>Gold</option>
                    <option>Platinum</option>
                </select> 
                <label id="important"><i>(Please Fill this if you only rent paintings)</i></label><br/>
                <input type="checkbox" required/><label id="important">I have read and accepted the Terms and Conditions and Privacy Policy</label><br/>
                <button  id="submit" onClick={register}>Submit</button>
            </div>
        </div>
    </div>
    
}

export default CreateAccount;