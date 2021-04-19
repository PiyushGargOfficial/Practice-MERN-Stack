const express = require('express');
const dotenv = require('dotenv');
const app = express();
const chalk = require('chalk');
dotenv.config({path: './config.env'})
const PORT = process.env.PORT;

require('./Db/connect')

app.use(express.json())

const Auth = require('./routers/auth')
app.use(Auth);

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(chalk.green.bold(`Server Started at Port : ${PORT}`));
})