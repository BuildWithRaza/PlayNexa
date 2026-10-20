export const getPlayers=()=>{
    let players=localStorage.getItem('players')
    if(players && players!==""){
        return JSON.parse(players)
    }
    else{
        return []
    }
}
export const getTeams=()=>{
    let teams=localStorage.getItem('teams')
    if(teams && teams!==""){
        return JSON.parse(teams)
    }
    else{
        return []
    }
}
