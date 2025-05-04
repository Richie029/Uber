require('dotenv').config();
const express = require('express');
const app = express();
const cors= require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
connectToDb();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/users",userRoutes);
module.exports=app;