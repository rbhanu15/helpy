const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const User = mongoose.model('User');

const router = express.Router();

router.use(requireAuth);

router.get('/notification', async (req,res)=>{
const userId = req.user._id;
    try{
    const user = await User.find({ _id: userId});
    User.findById(userId, 'notification', function(err, notification) {
        res.send(notification);
    });
}catch(err){
    res.status(422).send({error: err.message});
}
});

router.post('/alarm', async (req, res)=>{
    const { notification } = req.body;
    try{

    const user = await User.findOne({ _id: req.user._id });
    const contactusers = await User.find({_id: user.contactpersons});

    let i;
    for(i=0; i< contactusers.length; i++) {
      //console.log(contactusers[i]._id);
      User.updateMany(
        {_id: contactusers[i]._id}, 
        {
          $set: {
            'notification': notification,
          }
        },
        {
          multi: true
        },
        function (err, results) {
          if (err) {
            res.send(err);
          }
      
        }
        );
    }
    res.json(contactusers);

    //console.log(notification);
    console.log('alarm');
    }catch(err){
        res.status(422).send({error: err.message});
    }    
});
       
module.exports = router; 