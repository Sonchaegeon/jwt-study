require('dotenv').config()

var express = require('express')
var app = express()

var jwt = require('jsonwebtoken')

app.use(express.json())

var posts = [
    {
        username: 'Son',
        title: 'Post 1'
    }, {
        username: 'Howon',
        title: 'Post 2'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken })
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) throw err
        req.user = user
        next()
    })
}

app.listen(3000)