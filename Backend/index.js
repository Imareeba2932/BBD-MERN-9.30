const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

const UserRouter = require('./Routers/User')
const ProductRouter = require('./Routers/Product')

app.use(cors({
    origin: ['http://localhost:5173'],
}))

// middleware
app.use(express.json());

app.use('/user', UserRouter)
app.use('/product', ProductRouter)


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})
