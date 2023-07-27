const request = require('request') ; 


const url = 'https://api.weatherapi.com/v1/current.json?key=0260b7dd2353403c8c7170954231807&q=london' ;



const forecast = (country) =>{
const url = 'https://api.weatherapi.com/v1/current.json?key=0260b7dd2353403c8c7170954231807&q=' + country ;


request({url , json: true} , (error , response)=> {

    if(error){
        console.log('unable to connect to website!')
    }
    else if (response.body.error){
        console.log(response.body.error.message)
    }
    else{
        const object =  {
            latitude:  response.body.location.lat ,
            longitude: response.body.location.lon , 
            weather: response.body.current.condition.text , 
            temperature: response.body.current.temp_c , 
            }
        console.log(object)
    }
})
};


module.exports = {
    forecast
};



//   0260b7dd2353403c8c7170954231807
//  https://api.weatherapi.com/v1/current.json?key=0260b7dd2353403c8c7170954231807&q=london