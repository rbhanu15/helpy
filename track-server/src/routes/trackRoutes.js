const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Track = mongoose.model('Tracks');
//const { Track } = require('../models/Tracks');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res)=>{
    const tracks = await Track.find({ userId: req.user._id });

    res.send(tracks);
});


router.post('/tracks', async (req, res)=>{
 const { locations } = req.body;

 if(!locations)
 {
    return res.status(422).send({error:'You must provide a location'});
 }
 try{
 const track = await Track.findOne({ userId: req.user._id });
 if(!track){
    const track = new Track({ locations, userId: req.user._id });
    //return []
}
 if (!(track.locations.coordinates[0] === locations[0] && track.locations.coordinates[1] === locations[1])) {
    track.locations = {
        coordinates: locations
    };
    await track.save();
}
 res.send(track);
 }catch(err){
    res.status(422).send({error: err.message});
 }
});


module.exports = router; 