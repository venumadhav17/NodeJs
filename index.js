// //const { time } = require("console");
// const http = require('http');
// const { data } = require('../NodeJs/currency.json');

// const server = http.createServer((req, res) => {
//   const splitURL = req.url.split('/'); // const splitURL = req.url.split("/").slice(1)
//   // if we starts with "/" delimiter so the first element in the resulting array is an empty string.
//   const symbol = splitURL[splitURL.length - 1];
//   //const splitURL = req.url
//   switch (req.url) {
//     case '/': {
//       res.writeHead(200, { 'Content-Type': 'application/text' });
//       res.write(`<h1>Currency Convertor</h1>`);
//       res.end();
//       break;
//     }
//     case '/currencies': {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.write(JSON.stringify(data));
//       res.end();
//       break;
//     }
//     case `/currencies/${symbol}`: {
//       const result = data.find(
//         (elem) => elem.id.toLowerCase() === symbol.toLowerCase()
//       );
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.write(JSON.stringify(result));
//       res.end();
//       break;
//     }
//     default:
//       res.writeHead(404);
//       res.write(`Route not found!`);
//       res.end();
//   }
// });

//   // console.log("Hello from server!")
//   // const date = new Date().toLocaleDateString();
//   // const time = new Date().toLocaleTimeString();
//   // const serverInfo = {
//   //     serverName: "Crio Server",
//   //     version: "1.0.0",
//   //     currentDate: new Date().toDateString(),
//   //     currentTime: new Date().toTimeString(),
//   //   };
//   // console.log(req.url);
//   // if(req.url === "/status"){
//   //   res.writeHead(200,{"Content-Type": "application/json"})
//   //   res.write(JSON.stringify(serverInfo));
//   //   res.end();
//   // } else {
//   //   res.writeHead(200, {"Content-Type": "text/html"})
//   //   res.write('<h1>Hello World!</h1>')
//   //   res.end();
//   // }

//   //res.writeHead(200, {"Content-Type": "application/json"})
//   //console.log(`Server Date-Time: ${date} ${time}`)
//   //res.write(JSON.stringify(serverInfo));
//   //res.end();
// });

// server.listen(8082, () => {
//   console.log('Listening...');
// });

// //console.log("Hello from server!")

// creating an app instance
require('dotenv').config();
const express = require('express');
// const { data } = require('./DB/currency.json');
// import { getCurrencies } from './controllers/currencies.controller';

const currencyRoutes = require('./routes/currencies.routes');
const userRoutes = require('./routes/user.routes');
const { verifyAuth } = require('./middlewares/verifyAuth');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogs.routes');

const app = express();
const PORT = 8082;
const DB_URI = 'mongodb://127.0.0.1:27017/website';
console.log(DB_URI);

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log('Connected to DB at', DB_URI))
  .catch((e) => console.log('Failed to connect to DB', e));

app.use(express.json());
// we are applying verifyAuth middleware function as global middleware
app.use(verifyAuth); // Called first // In realworld scenario it's a authenticate process
app.use('/currencies', currencyRoutes); // Applied after verifyAuth
app.use('/users', userRoutes); // Applied after currencies
// Voila! Now all our request pass through the validation!
app.use('/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log('Listening!...');
});
