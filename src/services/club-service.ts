import * as HttpResponse from "../utils/http-helper"
import * as clubRepo from "../repositories/club-repository"
export const  getClubService = async() => {

    const data = await clubRepo.findAllClubs()
    const response = HttpResponse.ok(data)

    return response
}