require("dotenv").config()
const express = require("express");
const cors = require('cors');
const axios  = require("axios");



const app = express();
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));


const url = process.env.DB_ENDPOINT;
const key = process.env.API_KEY;

async function getMovie() {

    const headers =  {
        "X-Cassandra-Token": key,
         "Content-Type": "application/json"
        
     }
    try {
      const response = await axios.get(url, {headers});
        return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }


app.get("/", (req, res) => {

 res.json(
    {
        "message": "Welcome to the application.",
        "status": "success",
        "description": "This is a simple  application to list List Movies."
    }
 )
});

app.get("/movies", async (req, res) => {
    const movies = await getMovie();
    res.json(movies);

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log(url)
});










// start the server ?







