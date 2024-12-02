const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/',(req,res)=>{
  return res.send("Hi Welcome to stackblitz");
});

app.get('/total-distance',(req,res)=>{
  let d1 = parseFloat(req.query.distance1);
  let d2 = parseFloat(req.query.distance2);
  let total = d1+d2;
  res.send(total.toString());
});

function getResult(n){
  let length = n.length;
  let strength;
  if(length>15){
    strength = "strong";
  }else{
    strength = "weak";
  }
  console.log(strength);
  return strength;
}

app.get('/check-number',(req,res)=>{
  let n = req.query.number;
  res.send(getResult(n));
});


app.get('/check-login',(req,res)=>{
  var islogged = req.query.isLoggedIn==="true";
  var response;
  if(islogged){
    response = "user is logged in";
  }else{
    response = "user in not logged in";
  }
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
