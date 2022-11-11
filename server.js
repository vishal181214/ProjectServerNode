const express = require('express');
const app = express();
const data1 = require("./Routes/bollywood")
const cors = require('cors')
// const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
// app.use(cors);
app.use('/home', data1)

app.listen(process.env.PORT||8080,()=>{
    console.log("server running");
})
