import express , { Request , Response, json} from "express"
import createApp from "./app"


const app = createApp()
const port = process.env.PORT



app.listen(port ,()=>{
    console.log(`Servidor iniciado (Porta: ${port} )`)
})