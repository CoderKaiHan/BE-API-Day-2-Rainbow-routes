require('dotenv').config();

const express = require('express');

const app = express();

app.get('/',(req,res)=>{res.send(`
    <body style="margin:0;">
        <div style="border: 1px solid black; height: 10v; background-color:white;">
            <h2 style="text-align:center;">NAV BAR</h2>
        </div>
        <h1>White Page</h1>
    </body>
`)});

app.get('/:color',(req,res)=>{
    const captilizeFirstLetter = string => (string.charAt(0).toUpperCase() + string.slice(1));
    const myColor = captilizeFirstLetter(req.params.color);
    res.send(`
    <body style="margin:0;">
        <div style="border: 1px solid black; height: 10v; background-color:${myColor};">
            <h2 style="text-align:center;">NAV BAR</h2>
        </div>
        <h1 style="color:${myColor};">${myColor} Page</h1>
    </body>
`)});

app.post('/:color',(req,res)=>{
    res.send('Hello world')
});

app.listen(process.env.PORT);