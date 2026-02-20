const express = require('express')
const app = express()
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './view')

const router = require('./router')

app.use((req, res, next) => {
    console.log(req.method)
    next()
})

app.use(router)

app.use((err, req, res, next) => {
    res.send(err.message)
})

app.get('/', (req, res)=>{   
    res.send('Homepage!!')
})

module.exports = app