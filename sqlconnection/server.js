const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors= require("cors");


const app = express();
//Configuring express server
app.use(express.json());
app.use(cors());


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
             if(username===""||password===""||type===""){
                res.send({required:"Please Fill all fields"});
             }
             else if(confirmpass!=password){
                res.send({pass:"Ensure Password matches!!"});
             }
           else{
            console.log(type); if(type==="Rent Paintings"){
                mysqlConnection.query("INSERT INTO customer (username,password,Fname,LName,phonenumber,address,dob,category,emailid) values (?,?,?,?,?,?,?,?,?)",[username,password,Firstname,Lastname,phno,address,dob,category,emailid],
            (err,result)=>{
                console.log(err);
                if(result.length>0){
                    res.send(result)
                }
                else{
                    res.send({messages:"Account Created"})
                }
            });
            }
            else{
                mysqlConnection.query("INSERT INTO owner (username,password,FName,LName,phonenumber,address,dob,income,commission,emailid) values (?,?,?,?,?,?,?,0,0.40,?)",[username,password,Firstname,Lastname,phno,address,dob,emailid],
            (err,result)=>{
                console.log(err);
                if(result.length>0){
                    res.send(result)
                }
                else{
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
           mysqlConnection.query("INSERT INTO painting (paintingname,artistname,theme,rentalcost,image,description,hired,monthsnothired) values (?,?,?,?,?,?,'n',0)",[paintingname,artistname,theme,rentalcost,image,description],
           (err,result)=>{
               console.log(err);
               if(result.length>0){
                   res.send(result)
               }
               else{
                   res.send({messages:"Uploaded Successfully!"})
               }
           });
        }
       });

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
