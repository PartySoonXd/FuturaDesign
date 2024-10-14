require('dotenv').config({path: "./.env.local"})
const express = require('express')
const path = require('path')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const router = require('./routes/index')
const errorMiddleware = require('./middlewares/ErrorMiddleware')

const app = express()

const port = process.env.PORT || 3002
const host = process.env.HOSTNAME || "localhost"

const corsOptions = {
    credentials: true,
    exposedHeaders: {
        "Access-Control-Allow-Origin": process.env.NEXT_URL,
        "Access-Control-Allow-Credentials": true,
    },
    origin: [process.env.NEXT_URL, process.env.ADMIN_URL]
}

app.use(cors(corsOptions)) 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(fileUpload({}))
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`server is started on http://${host}:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()