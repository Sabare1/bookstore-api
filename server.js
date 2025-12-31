require('dotenv').config()
const express = require('express');
const connect = require('./database/db');
const app = express();
const port = process.env.PORT || 3000;
const bookRoutes = require('./routes/book-routes');

app.use(express.json());
app.use('/api/v1', bookRoutes)

app.listen(port, ()=>{
    connect();
    console.log(`server is listening on the port ${port}...`);
})