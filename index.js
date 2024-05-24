//const { time } = require("console");
const http = require('http');
const { data } = require('../NodeJs/currency.json');

const server = http.createServer((req, res) => {
  const splitURL = req.url.split('/'); // const splitURL = req.url.split("/").slice(1)
  // if we starts with "/" delimiter so the first element in the resulting array is an empty string.
  const symbol = splitURL[splitURL.length - 1];
  //const splitURL = req.url
  switch (req.url) {
    case '/': {
      res.write(`<h1>Currency Convertor</h1>`);
      res.end();
      break;
    }
    case '/currencies': {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(data));
      res.end();
      break;
    }
    case `/currencies/${symbol}`: {
      const result = data.find(
        (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
      );
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(result));
      res.end();
      break;
    }
    default:
      res.writeHead(404);
      res.write(`Route not found!`);
      res.end();
  }

  // console.log("Hello from server!")
  // const date = new Date().toLocaleDateString();
  // const time = new Date().toLocaleTimeString();
  // const serverInfo = {
  //     serverName: "Crio Server",
  //     version: "1.0.0",
  //     currentDate: new Date().toDateString(),
  //     currentTime: new Date().toTimeString(),
  //   };
  // console.log(req.url);
  // if(req.url === "/status"){
  //   res.writeHead(200,{"Content-Type": "application/json"})
  //   res.write(JSON.stringify(serverInfo));
  //   res.end();
  // } else {
  //   res.writeHead(200, {"Content-Type": "text/html"})
  //   res.write('<h1>Hello World!</h1>')
  //   res.end();
  // }

  //res.writeHead(200, {"Content-Type": "application/json"})
  //console.log(`Server Date-Time: ${date} ${time}`)
  //res.write(JSON.stringify(serverInfo));
  //res.end();
});

server.listen(8082, () => {
  console.log('Listening...');
});

//console.log("Hello from server!")
