const mongoose = require('mongoose');
const DB = process.env.DATABASE
const chalk = require('chalk');

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
