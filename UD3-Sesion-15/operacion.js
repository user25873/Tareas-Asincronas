const express = require("express")
const { appendFile } = require("fs")

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/user", (req, res) => {
    res.send(`El resultado de 28 + 58 es ${28+58}`)
})

app.listen(port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}`)
    console.log(`El resultado de 28 + 58 es ${28+58}`)
})

