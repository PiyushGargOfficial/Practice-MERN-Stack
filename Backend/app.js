const express = require('express');
const app = express();
const chalk = require('chalk');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

//Database
const DB = 'mongodb+srv://PiyushGarg:hsuyip123@cluster0.iyima.mongodb.net/MernStack?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser : true,
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
}).then(() => {
    console.log(chalk.blue.bold('Database Connected'));
}).catch((err) => {
    console.log(chalk.red.bold('Database Not Connected'));
})


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(chalk.green.bold(`Server Started at Port : ${PORT}`));
})