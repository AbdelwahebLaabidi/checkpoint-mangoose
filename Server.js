const express = require('express')
const connectDB = require('./Config/ConnectDB')
const ListeRoute = require('./Routes/Liste')

const app = express()

const port = 5000


app.use(express.json())

app.use('/api/liste',ListeRoute)


connectDB()


app.listen(port , console.log(`server is running on the port ${port}`))