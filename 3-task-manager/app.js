const express = require('express');
const app = express();
const port = 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server is listening on ${port}...`)
        })
    } catch (err) {
        console.log(err)
    }
}
start()