const axios = require('axios')
const fetch = require('node-fetch')


apiKey = "ab899343c048361943d75fc37a6d0f36"


//con esto me conecto a la API con ciudad londres
/*
axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ab899343c048361943d75fc37a6d0f36')
  .then(function (response) {
    // handle success
    console.log(response.data.main);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/

function conectApi(city,apiKey){
    //al lado de appid, puedes cambiar el pais, en este momento esta en cl
    a = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',cl&appid='+apiKey)
    return a
}



b = conectApi("antofagasta","ab899343c048361943d75fc37a6d0f36")
j = b.then((response) => {
  x = response.data.main
  console.log(x)
})





