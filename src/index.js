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
    req.query.limit =limit === null || limit === undefined || isNaN(Number(limit))?10:limit;
    req.query.offset = offset === null || offset === undefined || isNaN(Number(offset))?10:offset;
    
    next();
}

app.get("/newFeeds", async (req,res)=>{
    let {limit , offset} = req.query ;
    res.send(await newsArticleModel.find().skip(offset).limit(limit));
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;