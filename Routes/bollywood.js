const express= require('express');
const app = express();
const data = require("../Controllers/bollywood");



const dataRouter = express.Router()
dataRouter.route('/bollywood')
.get(data.bollywoodData)

module.exports=dataRouter;