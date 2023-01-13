const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000
const mongoose = require('mongoose')
const newListPost = require('./models/post')
const post = require('./models/post')
const newCardPost = require('./models/card')
const card = require('./models/card')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    
    try{
            const allList = await post.find()
            res.json(allList)
    }catch(err){
            res.json({message: err})
    }
})


 app.post('/posts', (req, res) => {
   
    const post = new newListPost({
        name: req.body.name
    })

    post.save()
    
    .then(data => {
       
        res.json(data)
    })
    .catch(err =>{
        res.json({message: err})

    })
 })


 app.get('/cards', async (req, res) => {
    
    try{
            const allCards = await card.find()
            res.json(allCards)
            console.log(allCards)
    }catch(err){
            res.json({message: err})
    }
})



 app.post('/addCard', (req, res) => {
   
    const newCard = new newCardPost({
        name: req.body.name,
        objID: req.body.objID
    })

    newCard.save()
    
    .then(data => {
       
        res.json(data)
    })
    .catch(err =>{
        res.json({message: err})

    })
 })



mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/trelloClone', () => console.log("connected to database"))


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))