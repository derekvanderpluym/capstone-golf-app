const express = require('express');
const app = express();
const PORT = 7777;
const cors = require('cors');
const scoreDataRoute = require('./routes/scoreDataRoute');
const courseDataRoute = require('./routes/courseDataRoute');



// middleware
app.use(cors());
app.use(express.json());


app.use('/', scoreDataRoute);
app.use('/', courseDataRoute);



app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
});







// require ('dotenv').config();

// const express = require('express');
// const app = express();
// const PORT = 7777;
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const scoreDataRoute = require('./routes/scoreDataRoute');
// const courseDataRoute = require('./routes/courseDataRoute');
// const jwt = require('jsonwebtoken');
// const utils = require('./utils');
// // const { createRequireFromPath } = require('module');

// const userData = {
//   userId: "789789",
//   password: "123456",
//   name: "Clue Mediator",
//   username: "cluemediator",
//   isAdmin: true
// };


// // middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', scoreDataRoute);
// app.use('/', courseDataRoute);



// app.use(function (req, res, next) {
//   var token = req.headers['authorization'];
//   if (!token) return next();

//   token = token.replace('Bearer ', '');
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     } else {
//       req.user = user; //set the user to req so other routes can use it
//       next();
//     }
//   });
// });

// app.get('/', (req, res) => {
//   if (!req.user) return res.status(401).json({ success: false, message: 'Invalid user to access it.' });
//   res.send('Welcome to the page - ' + req.user.name);
// });



// app.post('/users/signin', function (req, res) {
//   const user = req.body.username;
//   const pwd = req.body.password;

//   if (!user || !pwd) {
//     return res.status(400).json({
//       error: true,
//       message: "Username or Password required."
//     });
//   }

//   if (user !== userData.username || pwd !== userData.password) {
//     return res.status(401).json({
//       error: true,
//       message: "Username or Password is Wrong."
//     });
//   }

// const token = utils.generateToken(userData);
// const userObj = utils.getCleanUser(userData);

// return res.json({ user: userObj, token });
// })


// app.get('/verifyToken', function (req, res) {
//   var token = req.query.token || req.query.token;
//   if (!token) {
//     return res.status(400).json({
//       error: true, 
//       message: "Token is required."
//     });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) return res.status(401).json({
//       error: true, 
//       message: "invalid token."
//     });

//     if (user.userId !== userData.userId) {
//       return res.status(401).json({
//         error: true, 
//         message: "invalid user."
//       });
//     }
//     var userObj = utils.getCleanUser(userData);
//     return res.json({ user: userObj, token });
//   });
// });



// app.listen(PORT, () => {
//   console.log(`server running on port: ${PORT}`)
// });