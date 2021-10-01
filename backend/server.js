const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5000;
const uri = process.env.LOCAL_URI;

//log requests
app.use(morgan('tiny'));

//db connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) throw err;
    console.log("Connected to mongodb");
})

//load routes
const memberRouter = require('./routes/member');
const avenueRouter = require('./routes/avenue');
const projectRouter = require('./routes/project');

app.use('/members', memberRouter);
app.use('/avenues', avenueRouter);
app.use('/projects', projectRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
})