const axios = require('axios')
const fetch = require('node-fetch')


apiKey = "ab899343c048361943d75fc37a6d0f36"

function conectApi(city,apiKey){
    //al lado de appid, puedes cambiar el pais, en este momento esta en cl
    a = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',cl&appid='+apiKey)
    return a
}

function putValue(value){
  s = value + " hola"
  return s
}

b = conectApi("antofagasta","ab899343c048361943d75fc37a6d0f36")
j = b.then((response) => {
  temp = response.data.main.temp
  tempMax = response.data.main.temp_max
  tempMin = response.data.main.temp_min
  console.log(temp)
  console.log(tempMax)
  console.log(tempMin)
  //de esta forma podemos usar las otras funciones
  console.log(putValue(temp))
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
    console.log(temp)
  }
});




