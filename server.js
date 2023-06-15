import express from 'express'
import cors from 'cors'

const server=express()
const port=process.env.PORT || '3000'
import web from './routes/web.js'

const core1=express();
core1.use(cors({
    origin:["http://localhost:3000/"]
}))

// Static Files
server.use(express.static('./assets'))

// set Templates
server.set('view engine','ejs')

// load routes
server.use('/',web)

server.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})