const express = require('express')
const app = express();

const cors = require('cors');
const { response } = require('express');
app.get('/',(req,res) => {
    return res.json("hi there...")
})
app.listen(5000,()=> console.log("listening the music"))