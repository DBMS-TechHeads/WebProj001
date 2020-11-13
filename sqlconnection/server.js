const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors= require("cors");
var nodemailer = require('nodemailer');


const app = express();
//Configuring express server
app.use(express.json());
app.use(cors());

// Defining Variables to use------------------------------------------------------------------------------------------
var USRname;
var Type;
var ID;
var EMAILID;
let date_ob = new Date();

// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// prints date in YYYY-MM-DD format
var rentdate = year + "-" + month + "-" + date;

// MAIL OPTION--------------------------------------------------------------------------------------------------------
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'masthanmasthi037@gmail.com',
      pass: 'khasimkarimulla'
    }
  });
  
  var mailOptions = {
    from: 'masthanmasthi037@gmail.com',
    to: '',
    subject: 'Welcome to Paintorzo[noreply]',
    text: `Dear User,
           YOU HAVE SUCCESSFULLY CREATED AN ACCOUNT!
           Enjoy renting!`
  };

  var mailUpload = {
    from: 'masthanmasthi037@gmail.com',
    to: '',
    subject: 'Paintorzo[noReply]',
    text: `Dear User,
           
           YOU HAVE SUCCESSFULLY Added your Painting to our Gallery!!`
  };
// MYSQL connection---------------------------------------------------------------------------------------------------------------
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rohitsurya1234!',
    database: 'newschema',
    multipleStatements: true
    });

mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });

        app.get('/paintings' , (req, res) => {
            mysqlConnection.query('SELECT * FROM painting', (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
            } );
// ----------------------------------------------------------------------------------------------------------------------------------

        app.get('/paintings/:id',(req,res)=>{
            mysqlConnection.query('SELECT * FROM painting where paintingid='+mysql.escape(req.params.id), (err, rows, fields) => {
                if (!err)
                res.json(rows);
                else
                console.log(err);
                })
        });

        app.get('/membership' , (req, res) => {
            mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
            } );

        app.post('/userinfo',(req,res)=>{
             const  Firstname =req.body.Firstname;
             const  Lastname = req.body.Lastname;
             const  username = req.body.username;
             const  emailid  = req.body.emailid;
             const  address  = req.body.address;
             const  dob      = req.body.dob;
             const  phno     = req.body.phno;
             const  password = req.body.password;
             const  type     = req.body.type;
             const category = req.body.category;
             const confirmpass = req.body.confirmpass;
             mailOptions.to=emailid;
             if(username===""||password===""||type===""){
                res.send({required:"Please Fill all fields"});
             }
             else if(confirmpass!=password){
                res.send({pass:"Ensure Password matches!!"});
             }
             else if(phno.length<10){
                res.send({phno:"Ensure Password matches!!"});
             }
           else{
            console.log(type); if(type==="Rent Paintings"){
                mysqlConnection.query("INSERT INTO customer (username,password,Fname,LName,phonenumber,address,dob,category,emailid,type) values (?,?,?,?,?,?,?,?,?,'Customer')",[username,password,Firstname,Lastname,phno,address,dob,category,emailid],
            (err,result)=>{
                console.log(err);
                if(result.length>0){
                    res.send(result)
                }
                else{
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });
                    res.send({messages:"Account Created"})
                }
            });
            }
            else{
                mysqlConnection.query("INSERT INTO owner (username,password,FName,LName,phonenumber,address,dob,income,commission,emailid,type) values (?,?,?,?,?,?,?,0,0.40,?,'Owner')",[username,password,Firstname,Lastname,phno,address,dob,emailid],
            (err,result)=>{
                console.log(err);
                if(result.length>0){
                    res.send(result)
                }
                else{
                    
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                      });
                      
                    res.send({messages:"Account Created"})
                }
            });
            }
        }
        });

        // app.get('/login',(req,res)=>{
        //     mysqlConnection.query("select * from user", (err, rows, fields) => {
        //         if (!err)
        //         res.json(rows);
        //         else
        //         console.log(err);
        //         });

        // });
        
          
         


        app.post('/login',(req,res)=>{
            const username=req.body.username;
            const password= req.body.password;
            mysqlConnection.query("SELECT * FROM customer where username = ? AND password =?",
             [username,password],
             (err,result)=>{
                 if(err){
                     res.send({err: err});
                 } 
                 if(result.length>0){
                    USRname = username;
                    Type = result[0].type;
                    ID = result[0].custid;
                    EMAILID = result[0].emailid;
                    console.log(ID);
                    console.log(EMAILID);
                     res.send(result)
                 }
                 else{
                    mysqlConnection.query("SELECT * FROM owner where username = ? AND password =?",
                    [username,password],
                    (err,result)=>{
                        if(err){
                            res.send({err: err});
                        } 
                        if(result.length>0){
                            USRname = username;
                            Type = result[0].type;
                            ID = result[0].ownerid;
                            EMAILID = result[0].emailid;
                            console.log(ID);
                            console.log(EMAILID);
                            res.send(result)
                        }
                        else{
                            res.send({messages:"Wrong USERNAME OR PASSWORD"})
                        }
           
                   });

                 }
    
            });
        });

        app.post('/uploadimage',(req,res)=>{
            const paintingname=req.body.paintingname;
            const artistname= req.body.artistname;
            const theme=req.body.theme;
            const rentalcost= req.body.rentalcost;
            const image=req.body.image;
            const description= req.body.description;
            if(paintingname===""||theme===""||artistname===""||rentalcost===""||image===""){
                res.send({emptyfields:"Fill all fields!!"});

            }
            else{
           mysqlConnection.query("INSERT INTO painting (paintingname,artistname,theme,rentalcost,image,description,hired,monthsnothired,ownerid) values (?,?,?,?,?,?,'n',0,?)",[paintingname,artistname,theme,rentalcost,image,description,ID],
           (err,result)=>{
               console.log(err);
               if(result.length>0){
                   res.send(result)
               }
               else{
                
                mailUpload.to = EMAILID;
                transporter.sendMail(mailUpload, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                   res.send({messages:"Uploaded Successfully!"})
               }
           });
        }
       });

       app.get('/ownedpaintings',(req,res)=>{
        mysqlConnection.query('SELECT * FROM painting where ownerid='+ID, (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
    });

    app.get('/rentpainting',(req,res)=>{
        mysqlConnection.query('SELECT * FROM painting where hired="y" and ownerid='+ID, (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
    });

    app.get('/paintinghired',(req,res)=>{
        mysqlConnection.query('SELECT * FROM hiringinfo where Returned="n" and custid='+ID, (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
    });

    app.post('/rent',(req,res)=>{
        const paintingid=req.body.paintingid;
        const returndate= req.body.returndate;
        const custid = ID;
        const pname = req.body.pname;
        const image = req.body.image;
        console.log(custid);
        if(returndate=="" || custid===undefined || custid==="Customer" || custid==="Owner" || custid==""){
            res.send({emptyfields:"Please Log in or Fill all fields!!"});
        }
        else{
            mysqlConnection.query("INSERT INTO hiringinfo (rentdate,returndate,paintingid,custid,Returned,paintingname,image) values (?,?,?,?,'n',?,?)",[rentdate,returndate,paintingid,custid,pname,image],
            (err,result)=>{
                console.log(err);
                if(result.length>0){
                    res.send(result)
                }
                else{
                    res.send({messages:"Uploaded Successfully!"})
                }
            });
            mysqlConnection.query("UPDATE painting set hired='y' where paintingid=?",[paintingid],
            (err,result)=>{
                // console.log(err);
                // if(result.length>0){
                //     res.send(result)
                // }
                // else{
                //     res.send({messages:"Uploaded Successfully!"})
                // }
            });
         }
    
    });

    app.get('/Hiringhistory',(req,res)=>{
        mysqlConnection.query('SELECT * FROM hiringinfo where custid='+ID, (err, rows, fields) => {
            if (!err)
            res.json(rows);
            else
            console.log(err);
            })
    });

    app.post('/return',(req,res)=>{
        const billno = req.body.product;
        console.log(billno.paintingid);
            mysqlConnection.query("UPDATE hiringinfo set Returned='y' where Billno=?",[billno.BillNo],
            (err,result)=>{
                console.log(err);
                    
            
            });
            mysqlConnection.query("UPDATE painting set hired='n' where paintingid=?",[billno.paintingid],
                (err,result)=>{
                    console.log(err);
                    
                });
            
    
    });

    app.post('/logout',(req,res)=>{
        ID = '';
        console.log(ID);
            
    
    });




const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
