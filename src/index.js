const express = require('express')
const bodyparser = require('body-parser')
const http = require('http')
const path = require('path')
const morgan = require('morgan')
const {format} = require('timeago.js')


const app = express()


// View engine and views files
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'./views'))


// Estatic
app.use(express.static(path.join(__dirname,'./public')))

// middlewares
const env = require('node-env-file')
env('./.env') 

app.use(bodyparser.urlencoded({extended: false}))

app.use(morgan('dev'))

app.use((req,res,next)=>{
    app.locals.time = format
    next()
})


// Server settings
app.set('port', process.env.PORT || 4000)

const server = http.createServer(app)
const routes = require('./routes/route')

app.use('/', routes())
server.listen(app.get('port'),()=>{
    console.log(`running at ${app.get('port')}`)
})

