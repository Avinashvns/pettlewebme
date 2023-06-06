import express from 'express'
const server=express()
const port=process.env.PORT || '3000'
import web from './routes/web.js'


// Static Files
server.use(express.static('./assets'))

// set Templates
server.set('view engine','ejs')

// load routes
server.use('/',web)

server.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})