const express = require("express");
const request = require("request-promise");
const app = express();

const PORT = process.env.PORT || 5000;
const apiKey = "b02a399e7d0cdafd8f6dfe43ba8d9e76"
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())
app.get("/", (req, res) => {
     res.send("WELCOME TO THE AMAZON SCRAPPER API")
});

// get product details
app.get("/product/:productid", async(req, res) => {
     const{productid} = req.params
     try{
          const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productid}`);
          res.json(JSON.parse(response));
        //   the json.parse will make the result to be in json format
     }
     catch(err){
         console.log(err);
     }
})

// get product reviews
app.get("/product/:productid/reviews", async(req, res) => {
     const{productid} = req.params
     try{
          const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productid}`);
          res.json(JSON.parse(response));
        //   the json.parse will make the result to be in json format
     }
     catch(err){
         console.log(err);
     }
})

// get product offers
app.get("/product/:productid/offers", async(req, res) => {
     const{productid} = req.params
     try{
          const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productid}`);
          res.json(JSON.parse(response));
        //   the json.parse will make the result to be in json format
     }
     catch(err){
         console.log(err);
     }
})

// implementing a search functionality
app.get("/search/:searchQuery", async(req, res) => {
     const{searchQuery} = req.params
     try{
          const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);
          res.json(JSON.parse(response));
        //   the json.parse will make the result to be in json format
     }
     catch(err){
         console.log(err);
     }
})
app.listen(PORT, () => {
    console.log(`server is running on localhost: ${PORT}`);
})