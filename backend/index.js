import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDb/connect.js'
import PostRoutes from './routes/PostRoutes.js'
import DallE from './routes/DalleRoutes.js'

dotenv.config();

const app=express();
app.use(cors());


app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post',PostRoutes);
app.use('/api/v1/dalle',DallE);


app.get('/',(req,res)=>{
res.send("THis is working");
})


const startServer=()=>{
    try{
        connectDB(process.env.mongoDB_URL);
    app.listen(8080,()=>{
        console.log("Server started on 8080")
    })}
    catch(err){
        console.log("error in connecting to DB : ",err);
    }
}
 startServer();

 