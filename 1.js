const http = require('http');
const req = http.request('http://www.google.com', (res) =>{
res.on('data',(chunk)=>{
    console.log(`data chunk : ${chunk}`);
});
res.on('end',()=>{
    console.log("data end");
});
});
req.end(); 