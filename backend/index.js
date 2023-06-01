const express = require('express');
var cors = require('cors') ;

const app = express()
const port = 3001
app.use(cors())
var corsOptions = {
  origin: ["http://localhost:3000","https://letstock-2bc58.web.app/"]
};

app.use(cors(corsOptions));

app.use(express.json())


// Available Routes
app.use('/auth', require('./routes/register'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})