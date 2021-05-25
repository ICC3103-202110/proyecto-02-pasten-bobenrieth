
function addCity(listCitys,city){
    listCitys.push(city)
    return listCitys
}

function randomTemp(min,max){

    return  Math.floor(Math.random() * (max - min)) + min;
}

function arrowTable(location,temp,maxTemp,minTemp){
    arrow = {'name': location,'temp':temp, 'max': maxTemp, 'min': minTemp}
    return arrow
}

function addArrowToList(listArrows,arrow){
    listArrows.push(arrow)
    return listArrows
}

function searchCityOnList(listCitys,city){
    let pos = listCitys.indexOf(city)
    return pos
}



module.exports = {
    addCity,
    randomTemp,
    arrowTable,
    addArrowToList,
    searchCityOnList
    
}