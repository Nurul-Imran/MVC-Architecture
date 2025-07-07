const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');

//Body Parser For Form Data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRouter);

//Home Route
app.get('/', (req, res) => {
    res.status(200).send("Wellcome to home page");
});

//Error Route
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "Resource Not Found"
    })
})


module.exports = app;