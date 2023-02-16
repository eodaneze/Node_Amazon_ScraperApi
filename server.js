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
})
app.listen(PORT, () => {
    console.log(`server is running on localhost: ${PORT}`);
})