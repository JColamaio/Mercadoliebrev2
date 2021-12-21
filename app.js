const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve (__dirname, './public')

app.use(express.static(publicFolderPath));

app.use(express.static(path.join(__dirname, "./public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
   });

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
   });
   
app.get('/loginformulario', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
   });


app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor OK");
})
