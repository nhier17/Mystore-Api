require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/notFound')
const errorHandler = require('./middleware/error-handler')


app.use(express.json());

app.get('/', (req,res) => {
    res.send("<h1>Store Api</h1><a href='/api/v1/products'>products</a>")
})

app.use(notFoundMiddleware)
app.use(errorHandler)

const port = process.env.PORT || 3001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
app.listen(port, console.log("server is listening on port 3001..."))
    } catch (error) {
console.log(error)
    }
}
start()