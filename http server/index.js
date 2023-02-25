const http = require("http");
const server = http.createServer();
const friends = [
    {
        id: 0,
        name: "Sandeep Lohar"
    },
    {
        id: 1,
        name: "deep Lohar"
    },
    {
        id: 2,
        name: "Mandeep Lohar"
    }
]
server.on('request',(req,res) => {
    const item = req.url.split("/");
    console.log(item[1]);
    if(req.method ==='POST' && item[1]==="friends"){
      req.on('data',(data)=>{
        const friend = data.toString();
        console.log(friend)
        friends.push(JSON.parse(friend));
      })
    }
  if (req.method === 'GET' && item[1] === "friends") {
    res
      .writeHead(200, {
        "Content-Type": "application/json",
      })
      if(item.length === 3){
        const findex = +item[2];
        res.end(JSON.stringify(friends[findex]));
      }
      else{
          res.end(
            JSON.stringify(friends));
        }
  } else if (req.method === 'GET' && item[1] === "/messages") { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Sandeep Lohar its message</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("success");
});


