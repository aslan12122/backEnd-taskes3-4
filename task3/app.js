const yargs = require('yargs'); 
const weather = require('./weather.js')

yargs.command({
    command: 'display' , 

    describe: 'to display country weather from weather Api' , 

    builder:{ 
        name: {
            describe:'add country name',
            demandOption :true, 
            type: 'string'
        }
    }, 

    handler: (x)=> {
        weather.forecast(x.name) 
    }
})

yargs.parse();









