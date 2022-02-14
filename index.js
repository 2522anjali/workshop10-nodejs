const mongoose  = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

//Import ROutes
const authRoute = require('./route/auth');
const postRoute = require('./route/posts');


dotenv.config();

mongoose.connect( process.env.DB_CONNECT
    , {
    useNewUrlParser: true,
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));


//Middleware
app.use(express.json());
//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


app.listen(443, () =>
    console.log('up and running')
);
