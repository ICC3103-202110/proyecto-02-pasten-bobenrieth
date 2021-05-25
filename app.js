const {getTitle, getTable,selectAction1,noCities,selectAction2,
    InputLocation} = require("./view")
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
    console.log(action)
    
    if (action ==="Add City"){
        b = await InputLocation()
        location = b.input
        console.log(location)
        newListCitys = addCity(listCitys,location)
        console.log(newListCitys)

        maxTemp = randomTemp(0,100)
        minTemp = randomTemp(0,maxTemp)
        newTemp = randomTemp(minTemp,maxTemp)
        
        arrow = arrowTable(location,newTemp,maxTemp,minTemp)
        newListArrows = addArrowToList(listArrows,arrow)
    }

    app(newListCitys,newListArrows)

}

let listCitys = []
let listArrows = []
app(listCitys,listArrows)
