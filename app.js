const {getTitle, getTable,selectAction1,noCities,selectAction2,
    InputLocation, selectCity} = require("./view")
const {addCity, randomTemp,arrowTable,addArrowToList} = require("./update")
const { printTable } = require('console-table-printer');



async function app(listCitys,listArrows){
    console.clear();
    console.log(getTitle());
    lenghtCitys = listCitys.length

    if (lenghtCitys === 0){
        console.log(noCities())
        a = await selectAction1()
        
    }
    if (lenghtCitys > 0){
        
        getTable(listArrows)
        a = await selectAction2()
    }
    action = a.action
    
    
    if (action ==="Add City"){
        b = await InputLocation()
        location = b.input
        newListCitys = addCity(listCitys,location)

        maxTemp = randomTemp(0,100)
        minTemp = randomTemp(0,maxTemp)
        newTemp = randomTemp(minTemp,maxTemp)
        
        arrow = arrowTable(location,newTemp,maxTemp,minTemp)
        newListArrows = addArrowToList(listArrows,arrow)
    }
    if (action ==="Update City"){
        console.log("aca inicia update")
        b = await selectCity(listCitys)
        chosenCity = b.city
        console.log(chosenCity)
    }
    app(newListCitys,newListArrows)

}

let listCitys = []
let listArrows = []
app(listCitys,listArrows)
