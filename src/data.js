function checkHuman(character){
    return character.species == "Human";
}
function checkAlien(character){
    return character.species == "Alien";
}
function checkUnknown(character){
    return character.species == "unknown";
}
function checkStatusAlive(character){
    return character.status == "Alive";
}
function checkStatusDead(character){
    return character.status == "Dead";
}
function checkStatusUnknown(character){
    return character.status == "unknown";
}
function checkGenderFemale(character){
    return character.gender == "Female";
}
function checkGenderMale(character){
    return character.gender == "Male";
}
function checkGenderUnknown(character){
    return character.gender == "unknown";
}
function returnAllCharacters(){
    return true;
}
export function filterData(data, condition){
    let dataFilter = []
    if(condition == "human"){
        dataFilter = data.filter(checkHuman);
    }else if(condition == "alien"){
        dataFilter = data.filter(checkAlien);
    }else if(condition == "unknown"){
        dataFilter = data.filter(checkUnknown);
    }else if(condition == "alive"){
        dataFilter = data.filter(checkStatusAlive);
    }else if(condition == "dead"){
        dataFilter = data.filter(checkStatusDead);
    }else if(condition == "unknown-status"){
        dataFilter = data.filter(checkStatusUnknown);
    }else if(condition == "female"){
        dataFilter = data.filter(checkGenderFemale);
    }else if(condition == "male"){
        dataFilter = data.filter(checkGenderMale);
    }else if(condition == "unknown-gender"){
        dataFilter = data.filter(checkGenderUnknown);
    }else{
        dataFilter = data.filter(returnAllCharacters);
    }
    return dataFilter;
}
export function sortData(data, condition){
    const novoArray = [...data]
    if(condition === "a-z"){
        return novoArray.sort((a,b)=> a.name < b.name ? -1 : 1)
    }else if(condition ==="z-a") {
        return novoArray.sort((a,b)=> a.name < b.name ? 1 : -1)
    }else{
        return data; 
    }
}
export function computeStatus(data, condition){
    let computData = ""
    if(condition == "human"){
        computData = data.filter(checkHuman).length;
    }else if(condition == "alien"){
        computData = data.filter(checkAlien).length;
    }else if(condition == "unknown"){
        computData = data.filter(checkUnknown).length;
    }else if(condition == "alive"){
       computData = data.filter(checkStatusAlive).length;
    }else if(condition == "dead"){
        computData = data.filter(checkStatusDead).length
    }else if(condition == "unknown-status"){
        computData = data.filter(checkStatusUnknown).length;
    }else if(condition == "female"){
       computData = data.filter(checkGenderFemale).length;
    }else if(condition == "male"){
        computData = data.filter(checkGenderMale).length;
    }else if(condition == "unknown-gender"){
        computData = data.filter(checkGenderUnknown).length;
    }
    return computData;
}
export function computeStatusPorcentage(data, condition){
    let computData = ""
    if(condition == "human"){
        computData = Math.round(data.filter(checkHuman).length/data.length*100);
    }else if(condition == "alien"){
        computData = Math.round(data.filter(checkAlien).length/data.length*100);
    }else if(condition == "unknown"){
        computData = Math.round(data.filter(checkUnknown).length/data.length*100);
    }else if(condition == "alive"){
       computData = Math.round(data.filter(checkStatusAlive).length/data.length*100);
    }else if(condition == "dead"){
        computData = Math.round(data.filter(checkStatusDead).length/data.length*100);
    }else if(condition == "unknown-status"){
        computData = Math.round(data.filter(checkStatusUnknown).length/data.length*100);
    }else if(condition == "female"){
       computData = Math.round(data.filter(checkGenderFemale).length/data.length*100);
    }else if(condition == "male"){
        computData = Math.round(data.filter(checkGenderMale).length/data.length*100);
    }else if(condition == "unknown-gender"){
        computData = Math.round(data.filter(checkGenderUnknown).length/data.length*100);
    }
    return computData;
}