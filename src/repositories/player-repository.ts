import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"


const database : PlayerModel[] | undefined = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            appearances: 7,
            goals: 4,
            assists: 2,
            passesCompleted: 512,
            shotsOnTarget: 15,
            tackles: 2,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            appearances: 5,
            goals: 2,
            assists: 1,
            passesCompleted: 230,
            shotsOnTarget: 10,
            tackles: 1,
        },
    },
    {
        id: 3,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            appearances: 10,
            goals: 12,
            assists: 2,
            passesCompleted: 312,
            shotsOnTarget: 28,
            tackles: 0,
        },
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            appearances: 9,
            goals: 1,
            assists: 6,
            passesCompleted: 620,
            shotsOnTarget: 8,
            tackles: 12,
        },
    },
    {
        id: 5,
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            appearances: 9,
            goals: 6,
            assists: 3,
            passesCompleted: 385,
            shotsOnTarget: 18,
            tackles: 3,
        },
    },
    {
        id: 6,
        name: "Vinícius Júnior",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            appearances: 10,
            goals: 7,
            assists: 5,
            passesCompleted: 410,
            shotsOnTarget: 20,
            tackles: 4,
        },
    },
    {
        id: 7,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            appearances: 7,
            goals: 5,
            assists: 2,
            passesCompleted: 280,
            shotsOnTarget: 14,
            tackles: 1,
        },
    },
    {
        id: 8,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            appearances: 9,
            goals: 1,
            assists: 4,
            passesCompleted: 570,
            shotsOnTarget: 6,
            tackles: 8,
        },
    },
    {
        id: 9,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Belgium",
        position: "Goalkeeper",
        statistics: {
            appearances: 10,
            goals: 0,
            assists: 0,
            passesCompleted: 320,
            shotsOnTarget: 0,
            tackles: 0,
        },
    },
    {
        id: 10,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            appearances: 8,
            goals: 7,
            assists: 3,
            passesCompleted: 360,
            shotsOnTarget: 22,
            tackles: 2,
        },
    },
    {
        id: 11,
        name: "Rodrygo Goes",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            appearances: 10,
            goals: 5,
            assists: 4,
            passesCompleted: 300,
            shotsOnTarget: 16,
            tackles: 3,
        },
    },
    {
        id: 12,
        name: "João Cancelo",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            appearances: 8,
            goals: 1,
            assists: 3,
            passesCompleted: 480,
            shotsOnTarget: 4,
            tackles: 14,
        },
    },
    {
        id: 13,
        name: "Andrew Robertson",
        club: "Liverpool",
        nationality: "Scotland",
        position: "Defender",
        statistics: {
            appearances: 7,
            goals: 0,
            assists: 2,
            passesCompleted: 390,
            shotsOnTarget: 2,
            tackles: 18,
        },
    },
    {
        id: 14,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            appearances: 8,
            goals: 8,
            assists: 2,
            passesCompleted: 310,
            shotsOnTarget: 18,
            tackles: 1,
        },
    },
    {
        id: 15,
        name: "Jude Bellingham",
        club: "Borussia Dortmund",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            appearances: 7,
            goals: 4,
            assists: 1,
            passesCompleted: 400,
            shotsOnTarget: 10,
            tackles: 10,
        },
    },
    {
        id: 16,
        name: "Phil Foden",
        club: "Manchester City",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            appearances: 8,
            goals: 3,
            assists: 3,
            passesCompleted: 450,
            shotsOnTarget: 12,
            tackles: 5,
        },
    },
    {
        id: 17,
        name: "Antonio Rüdiger",
        club: "Real Madrid",
        nationality: "Germany",
        position: "Defender",
        statistics: {
            appearances: 9,
            goals: 1,
            assists: 0,
            passesCompleted: 560,
            shotsOnTarget: 3,
            tackles: 20,
        },
    },
    {
        id: 18,
        name: "Ederson Moraes",
        club: "Manchester City",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            appearances: 9,
            goals: 0,
            assists: 0,
            passesCompleted: 300,
            shotsOnTarget: 0,
            tackles: 0,
        },
    },
    {
        id: 19,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            appearances: 8,
            goals: 2,
            assists: 4,
            passesCompleted: 630,
            shotsOnTarget: 5,
            tackles: 15,
        },
    },
    {
        id: 20,
        name: "Thomas Müller",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Forward",
        statistics: {
            appearances: 6,
            goals: 3,
            assists: 3,
            passesCompleted: 300,
            shotsOnTarget: 8,
            tackles: 2,
        },
    }
    
]

export const findAllPlayer = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deletePlayerById = async ( id: number) => {
    const index = database.findIndex(p => p.id === id)

    if (index !== -1){
        database.splice(index, 1)
        return true
    }
    return false
}

export const updatePlayerById = async (id:number, statistics: statisticsModel ) => {
    const index = database.findIndex(p => p.id === id)
    if (index !== -1){
        database[index].statistics = statistics

        return database[index]
    }
}