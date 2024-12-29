export interface PlayerModel {
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string
    statistics: {
        appearances: number;
        goals: number;
        assists: number;
        passesCompleted: number;
        shotsOnTarget: number;
        tackles: number;
    }
}