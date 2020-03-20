require('./models/User');
require('./models/Tracks');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Authroutes = require('./routes/Authroutes');
const trackRoutes = require('./routes/trackRoutes');
const LocationRoutes = require('./routes/Locationroutes');
const NotificationRoutes = require('./routes/Notification');
const requireAuth = require('./middleware/requireAuth');

const app = express();
//const io = require('socket.io')();

//app.io = io;

//const locationRoutes = require('./realtime')(io);





app.use(bodyParser.json());
app.use(Authroutes);
app.use(trackRoutes);
app.use(LocationRoutes);
app.use(NotificationRoutes);

const mongoUri = process.env.MONGODB_URI;


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
    /*app.io.on('connection', function (socket) {
        console.log("user connected");
    });*/
}); 





