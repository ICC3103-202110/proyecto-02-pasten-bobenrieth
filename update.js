const axios = require('axios')

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

function conectApi(city,apiKey){
    //al lado de appid, puedes cambiar el pais, en este momento esta en cl
    //a = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey)
    a = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+"&units=metric")
    return a
}



module.exports = {
    addCity,
    randomTemp,
    arrowTable,
    addArrowToList,
    searchCityOnList,
    conectApi
    
}