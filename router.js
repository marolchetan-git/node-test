const express = require('express')
const jwt = require('jsonwebtoken')
const Router = express.Router()

let data = [
    { username: "chetan", password: "12345" },
    { username: "sushma", password: "54321" }
]

const auth = (req, res, next) =>{
    const token = req.headers.authorization
    const justToken = token.split(' ')[1]    
    jwt.verify(justToken, 'secret', (error) => {
        if(error){
            throw new Error("Invalid user!!")
        }
    })
    next()
}

Router.post("/newlogin", (req, res) => {
    const { username, password } = req.body
    const user = data.find(d => d.username === username)
    if (!user) {
        res.json({
            msg: "Unauthorized"
        })
    } else {   
        const token = jwt.sign(password, "secret")     
        res.json({
            token
        })
    }
})

Router.get("/userdetails", auth, (req, res) => {
    res.json({
        msg: "user details"
    })
})



module.exports = Router


