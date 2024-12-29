import { Router } from "express";
import * as CRUD from "./controllers/player-controler";
import * as ClubController from "./controllers/club-controller";

const paths =  Router()

paths.get("/players" , CRUD.getPlayer)
paths.get("/players/:id" , CRUD.getPlayerById)
paths.post("/players" , CRUD.postPlayer)
paths.delete("/players/:id", CRUD.deletePlayer)
paths.patch("/players/:id", CRUD.updatePlayer)

paths.get("/clubs", ClubController.getClub  )

export default paths