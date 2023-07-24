import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
const server=express()
const port=process.env.PORT || '5000'
import web from './routes/web.js'

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

const core1=express();
core1.use(cors({
    origin: ["http://localhost:5000/"]
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
