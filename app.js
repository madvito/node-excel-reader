const express = require('express');
const router = require('./routes/routes')
require('dotenv').config()

const app = express();
app.use(router)

console.log(process.env.NAME);
const PORT = process.env.PORT || 3000;
app.listen(PORT ,()=>{
    console.log(`app listening in localhost:${PORT}`)
})

