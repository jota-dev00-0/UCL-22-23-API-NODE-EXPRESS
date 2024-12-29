import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"
import * as repositories from "../repositories/player-repository"
import * as HttpResponse from "../utils/http-helper"


export const getPlayerService = async () => {

    const data = await repositories.findAllPlayer()
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }

    return response

}

export const getPlayerByIdService = async (id: number) => {
    const data = await repositories.findPlayerById(id)
    let response = null

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }

    return response
}


export const postPlayerService = async (player: PlayerModel) => {
    
    let response = null
    if(Object.keys(player).length !== 0){
         await repositories.insertPlayer(player)
         response = await HttpResponse.created()
    }else{
         response = await HttpResponse.BadRequest()
        
    }
    return response
}

export const deletePlayerService = async (id: number)=>{

    let response = null
    const isDeleted = await repositories.deletePlayerById(id)
    
    
    

    if ( isDeleted){
        response = await HttpResponse.ok({message: "deleted"})
    }
    else {
        response = await HttpResponse.BadRequest()
    }

    return response
}

export const updatePlayerService = async (id: number, statistics : statisticsModel) => {

    let data = await repositories.updatePlayerById(id , statistics)
    let response =  await HttpResponse.ok(data)

    return response
}