import React, { useState } from 'react';
import Axios from 'axios';

function UploadPainting(props){
    const [imageup, setimageup] = useState("");
    const [paintingnameup, setpaintingnameup] = useState("");
    const [artistnameup, setartistnameup] = useState("");
    const [themeup, setthemeup] = useState("");
    const [rentalcostup, setrentalcostup] = useState("");
    const [Descriptionup, setDescriptionup] = useState("");
    
    const submit = () =>{
        Axios.post('http://localhost:8080/uploadimage',{
            image:imageup,
            paintingname:paintingnameup, 
            artistname:artistnameup, 
            theme:themeup, 
            rentalcost:rentalcostup, 
            Description:Descriptionup, 
        }).then((response) => {
            if(response.data.messages){
                alert("upload Successfully");
                
                }
                else{
                  alert("Ensure All fields are Filled!");
                }

          });
    };
    return <div className="owner">
            <h1>Upload Painting</h1>
            <label for ="pname">Enter Image URL</label>
            <input type="text" placeholder="Image URL" spellCheck='false'  onChange={(e) => {
            setimageup(e.target.value);
          }} required/><br/>
            <label for ="pname">Painting Name</label>
            <input type="text" placeholder="Painting Name" spellCheck='false'  onChange={(e) => {
            setpaintingnameup(e.target.value);
          }} required/><br/> 
            <label for ="name">Name of the Artist</label>
            <input type="text" placeholder="ArtistName" spellCheck='false'  onChange={(e) => {
            setartistnameup(e.target.value);
          }} required/>
            <label for ="Themes">Themes</label>
            <select id="Themes" spellCheck='false'  onChange={(e) => {
            setthemeup(e.target.value);
          }} required>
            <option value="Animal">Animal</option>
            <option value="Landscape">Landscape</option>
            <option value="Seascape">Seascape</option>
            <option value="Still-Life">Still-Life</option>
            <option value="Religious">Religious</option>    
            <option value="Nature">Nature</option>          
            </select>
            <label for ="rentalcost">Rental Cost</label>
            <input type="number" min="1000" placeholder="In Rupees(min Rs1000)" spellCheck='false'  onChange={(e) => {
            setrentalcostup(e.target.value);
          }} required/><br/>
            <label for ="Desc">Description</label>
            <input type="text" placeholder="Description" spellCheck='false'  onChange={(e) => {
            setDescriptionup(e.target.value);
          }}/><br/>
            <button onClick={submit}>Submit</button>
    </div>
    
}

export default UploadPainting;