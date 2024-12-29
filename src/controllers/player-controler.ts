import { Request, Response } from "express"
import * as service from "../services/player-services"
import { BadRequest, noContent } from "../utils/http-helper"
import { statisticsModel } from "../models/statistics-model"


export const getPlayer = async (req: Request, res: Response)=> {
    const HttpResponse = await service.getPlayerService()

    HttpResponse.body
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }

export const getPlayerById = async ( req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await service.getPlayerByIdService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const postPlayer =  async (req: Request, res: Response) => {
    const bodyValue =  req.body
    const HttpResponse = await service.postPlayerService(bodyValue )

    if(HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    }else{
        const response = await BadRequest()
        res.send(response.statusCode).json(response.body)
    }
    
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const HttpResponse = await service.deletePlayerService(id)
    res.status(HttpResponse.statusCode)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: statisticsModel = req.body
    const HttpResponse = await service.updatePlayerService(id , bodyValue)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

