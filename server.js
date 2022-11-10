const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require('cors')

app.use(cors);
app.use('/home', data1)

app.listen(process.env.PORT||8400,()=>{
    console.log("server running");
})
