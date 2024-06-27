const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.listen(3000, err =>{
    err
    ? console.log("Error al levantar el servidor")
    : console.log("Servidor corriendo en el puerto 3000");
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/home.html"));
})

app.get("/register.html", (req, res)=>{
    res.sendFile(path.resolve("./views/register.html"));
});

app.get("/login.html", (req, res) =>{
    res.sendFile(path.resolve("./views/login.html"));
})
