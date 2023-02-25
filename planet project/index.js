const parse = require('csv-parse');
const fs = require('fs');
const habital = [];

function habitalplanet(planet){
return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream('keplar_data.csv')
.pipe(parse({
    comment: '#',
    columns: true,
}))
.on('data',(data)=>{
    if(habitalplanet(data)){
        habital.push(data);
        //console.log(data);
    }
})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    console.log(`${habital.length} is the live survival planet`);
})
