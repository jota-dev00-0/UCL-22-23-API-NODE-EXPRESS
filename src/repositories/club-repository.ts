const database: clubModel[] = [
    { name: "Real Madrid", country: "Spain", league: "La Liga" },
    { name: "Barcelona", country: "Spain", league: "La Liga" },
    { name: "Atletico Madrid", country: "Spain", league: "La Liga" },
    { name: "Sevilla", country: "Spain", league: "La Liga" },
    { name: "Manchester City", country: "England", league: "Premier League" },
    { name: "Liverpool", country: "England", league: "Premier League" },
    { name: "Chelsea", country: "England", league: "Premier League" },
    { name: "Tottenham", country: "England", league: "Premier League" },
    { name: "Bayern Munich", country: "Germany", league: "Bundesliga" },
    { name: "Borussia Dortmund", country: "Germany", league: "Bundesliga" },
    { name: "RB Leipzig", country: "Germany", league: "Bundesliga" },
    { name: "Eintracht Frankfurt", country: "Germany", league: "Bundesliga" },
    { name: "Paris Saint-Germain", country: "France", league: "Ligue 1" },
    { name: "Marseille", country: "France", league: "Ligue 1" },
    { name: "AC Milan", country: "Italy", league: "Serie A" },
    { name: "Inter Milan", country: "Italy", league: "Serie A" },
    { name: "Napoli", country: "Italy", league: "Serie A" },
    { name: "Juventus", country: "Italy", league: "Serie A" },
    { name: "Ajax", country: "Netherlands", league: "Eredivisie" },
    { name: "Club Brugge", country: "Belgium", league: "Belgian Pro League" },
    { name: "Porto", country: "Portugal", league: "Primeira Liga" },
    { name: "Sporting CP", country: "Portugal", league: "Primeira Liga" },
    { name: "Benfica", country: "Portugal", league: "Primeira Liga" },
    { name: "Celtic", country: "Scotland", league: "Scottish Premiership" },
    { name: "Shakhtar Donetsk", country: "Ukraine", league: "Ukrainian Premier League" },
    { name: "RB Salzburg", country: "Austria", league: "Austrian Bundesliga" },
    { name: "Dinamo Zagreb", country: "Croatia", league: "Croatian First League" },
    { name: "Rangers", country: "Scotland", league: "Scottish Premiership" },
    { name: "Viktoria Plzen", country: "Czech Republic", league: "Czech First League" },
    { name: "Copenhagen", country: "Denmark", league: "Danish Superliga" },
    { name: "Maccabi Haifa", country: "Israel", league: "Israeli Premier League" }
];

export const findAllClubs = async (): Promise<clubModel[]> => {
    return database
}