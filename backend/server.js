const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/connection');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//log requests
app.use(morgan('tiny'));

//db connection
connectDB();

//load routes
const memberRouter = require('./routes/member');
const avenueRouter = require('./routes/avenue');
const projectRouter = require('./routes/project');
const skillRouter = require('./routes/skill')

app.use('/members', memberRouter);
app.use('/avenues', avenueRouter);
app.use('/projects', projectRouter);
app.use('/skills', skillRouter)


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
})