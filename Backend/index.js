const express = require('express');
const app = express();
const port = 3000;

const UserRouter = require('./Routers/User')

// middleware
app.use(express.json());

app.use('/user', UserRouter)


app.listen(port, () => {
    console.log('Server is running at the port 3000')
})
