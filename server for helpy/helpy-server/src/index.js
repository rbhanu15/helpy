require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Authroutes = require('./routes/Authroutes');
const requireAuth = require('./middleware/requireAuth');

const app = express();


app.use(bodyParser.json());
app.use(Authroutes);


const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-pjyxj.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo instance ');
});
mongoose.connection.on('error', (err)=>{
    console.error('Error connected to mongo', err);
});

//GET REQUEST AND RESPONSE
app.get('/', requireAuth, (req, res)=>{
    res.send(`Your email: ${req.user.email}`);
});


app.listen(3000, ()=>{
    console.log('Listening on 3000');
});