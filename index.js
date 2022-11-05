const express = require("express");
const { json } = require("express");
const flight = require("./routes/flightRoute");

const {createPool} = require('mysql');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootuser',
  connectionLimit: 10
});

pool.query(`select * from Flightdb.flights` , (err, res)=>{
  return console.log(res);
})


const app = express();

app.use(json());

app.use('/flight' , flight);

// app.use("/", routes);
app.get('/' , (req , res)=>{
  res.send('Hello there');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 