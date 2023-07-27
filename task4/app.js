const express = require('express'); 
const hbs = require('hbs');
const app = express() ; 

app.use(express.static('public'))

hbs.registerPartials(__dirname + "/views/partials")


const port = process.env.PORT || 3000


app.set('view engine', 'hbs');

app.get('/'  , (req , res)=>{
    res.render('index')
})

app.get('/weather'  , (req , res)=>{

    res.render('weather', {
        latitude: 41.02,
        longitude: 28.96,
        weather: 'Clear',
        temperature: 21
    } )
})


app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})


