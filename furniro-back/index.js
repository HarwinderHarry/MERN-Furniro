// const express = require ('express');
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';

const app = express();
dotenv.config();

// database config
connectDB();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('api/v1/auth', authRoute);

app.get('/', (req,res)=>{
    res.send("<h1>welcome to backend page</h1>");
})

const port = process.env.Port || 3001;
app.listen(port, () =>{
    console.log("Server Running");
})