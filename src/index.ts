type Team = "red" | "blue" | "yellow"


interface Player {
    nickName : string,
    team: Team
}


const nico :Player = {
    nickName : "nico"
    ,team : "red"
}