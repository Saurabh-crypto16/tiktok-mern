import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";


//app config
const app=express();
const port=process.env.PORT|| 9000;

//middleware
app.use(express.json());

//course headers
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*'),
  res.setHeader('Access-Control-Allow-Headers','*'),
  next()
});

//DB config
const connection_url="mongodb+srv://admin:zczlXZNePLj0ihA4@cluster0.ndej4.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//api endpoint
app.get('/',(req,res)=> res.status(200).send("hello world"));

app.get("/v1/posts",(req,res)=>res.status(200).send(Data));

//for fetching data from dtabase
app.get('/v2/posts',(req,res)=>{
  Videos.find(({},err,data)=>{
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

//for posting to database
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listener
app.listen(port, ()=> console.log(`listening on localhost: ${port}`));