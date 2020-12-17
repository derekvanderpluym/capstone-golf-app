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


