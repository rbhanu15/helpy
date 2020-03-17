const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Track = mongoose.model('Tracks');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res)=>{
    const tracks = await Track.find({ userId: req.user._id });

    res.send(tracks);
});
router.get('/findnear', async(req,res)=>{

   const tracks = await Track.find({ userId: req.user._id });

   const nearmeUser = await Track.find({
      locations: {
          $near: {
              $geometry: {
                  type: `Point`,
                  coordinates: [ tracks.position.coordinates[0], tracks.position.coordinates[1] ]
              },
              $maxDistance: 500,
              $minDistance: 0
          }
      }
  });
  const usersnearme = nearmeUser.map(({ _id }) => ({ _id }));
  
  res.send(usersnearme);

});

router.post('/tracks', async (req, res)=>{
 const { name, locations } = req.body;

 if(!name || !locations)
 {
    return res.status(422).send({error:'You must provide a name or location'});
 }
 try{
 const track = new Track({ name, locations, userId: req.user._id });
 await track.save();
 res.send(track);
 }catch(err){
    res.status(422).send({error: err.message});
 }
});


module.exports = router; 