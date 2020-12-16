const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10

const { newsArticleModel } = require('./connector')
const { data } = require('./data')


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const middleWare = (req,res,next)=>{
    let {limit , offset} = req.query ; 
    req.query.limit = Number(limit)?Number(limit):10;
    req.query.offset = Number(offset)?Number(offset):0;
    console.log(req.query);
    next();
}

app.get("/newFeeds", async (req,res)=>{
    let {limit , offset} = req.query ;
    res.send(await newsArticleModel.find().skip(Number(offset)||0).limit(Number(limit)||10));
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;