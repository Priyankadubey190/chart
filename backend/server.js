const axios = require('axios')
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    var myHeaders = {apikey: "Imnx60pwQiya9Qhjq3h53bJTRgZ0SgJi"};
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
  
    axios.get("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      
      .then((result) => {

         console.log("result", result);
         res.send(result.json());
      
      })
      .catch((error) => console.log("error", error));

  //
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const getdata = () => {
 
//              };

//     getdata()
  