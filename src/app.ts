import express from "express"
import paths from "./routes"
import cors from "cors"
import { METHODS } from "http"

function createApp(){
    const app = express()

    app.use(express.json())

    app.use("/api", paths)

    const corsOPtions = {
        origin: "localhost",
        methods: ["GET"]
    }

    app.use(cors(corsOPtions))
    
    return app

}

export default createApp