const {getTitle, getTable,selectAction1,noCities,selectAction2,
    InputLocation, selectCity} = require("./view")
const {addCity, randomTemp,arrowTable,addArrowToList,
        searchCityOnList, conectApi} = require("./update")
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
        /*
        maxTemp = randomTemp(0,100)
        minTemp = randomTemp(0,maxTemp)
        newTemp = randomTemp(minTemp,maxTemp)
        
        arrow = arrowTable(location,newTemp,maxTemp,minTemp)
        newListArrows = addArrowToList(listArrows,arrow)
        */
        //desde aqui hago la API

        // /*
        api = conectApi(location,"ab899343c048361943d75fc37a6d0f36")
        h = await api.then((response) => {
            temp = response.data.main.temp
            tempMax = response.data.main.temp_max
            tempMin = response.data.main.temp_min
            error = ""
          })
          .catch(function () {
            // handle error
            error = "esta ciudad no existe"
            console.log(error);
          })
          .then(function () {
            // always executed
            if (error != "esta ciudad no existe" ){

              arrow = arrowTable(location,temp,tempMax,tempMin)
              newListArrows = addArrowToList(listArrows,arrow)
              app(newListCitys,newListArrows)
            }
            if (error === "esta ciudad no existe" ){
                
                maxTemp = randomTemp(0,100)
                minTemp = randomTemp(0,maxTemp)
                newTemp = randomTemp(minTemp,maxTemp)
        
                arrow = arrowTable(location,newTemp,maxTemp,minTemp)
                newListArrows = addArrowToList(listArrows,arrow)
                app(newListCitys,newListArrows)
            }
          });
          // */
    }

    if (action ==="Update City"){

        b = await selectCity(listCitys)
        chosenCity = b.city
        
        positionOfCity = searchCityOnList(listCitys,chosenCity)

        maxTemp = randomTemp(0,100)
        minTemp = randomTemp(0,maxTemp)
        newTemp = randomTemp(minTemp,maxTemp)
        
        arrow = arrowTable(chosenCity,newTemp,maxTemp,minTemp)
        listArrows[positionOfCity] = arrow
        newListArrows = listArrows  
        app(newListCitys,newListArrows)
    }

    if (action ==="Delete City"){

        b = await selectCity(listCitys)
        chosenCity = b.city

        positionOfCity = searchCityOnList(listCitys,chosenCity)

        listCitys.splice(positionOfCity,1)
        listArrows.splice(positionOfCity,1)

        newListCitys = listCitys
        newListArrows = listArrows    
        app(newListCitys,newListArrows)   
    }


    //app(newListCitys,newListArrows)

}

let listCitys = []
let listArrows = []
app(listCitys,listArrows)
