const express = require('express');
const connectdb = require('./config/db');
const userrouter = require('./routes/userroute');


const app = express();
const port = 2323;
app.use(express.json());

connectdb();


app.use("/users",userrouter);

app.listen(port, () =>{
    console.log(`i am alive on ${port}`);
});