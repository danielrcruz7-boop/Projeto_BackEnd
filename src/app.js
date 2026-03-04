//const express = require("express");
import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express();
app.use(express.json())  // formato JSON
app.use(cors()) // Deixa o backend conectar com frontend

app.get("/", (req, res)=>{
    res.json({msg:"montallegro"})
})

app.use("/usuarios", usuarioRoutes)

export default app