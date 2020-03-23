const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const User = mongoose.model('User');

const router = express.Router();

router.use(requireAuth);

router.get('/currentlocation', async (req,res)=>{
    res.send('jooo')
});

router.post('/currentlocation', async (req, res)=>{
    const { position } = req.body;

    if(!position)
        {
           return res.status(422).send({error:'You must provide a location'});
        }
        try{
        //const track = new Track({ locations, userId: req.user._id });
            const user = await User.findOne({ _id: req.user._id });
            if(!user){
                return [];
            }
            //update new position
            if (!(user.position.coordinates[0] === position.coordinates[0] && user.position.coordinates[1] === position.coordinates[1])) {
              // console.log(user.position);
              user.position = {
                    type: `Point`,
                    coordinates: position.coordinates
                }
            
            await user.save();

            }

            const contactpersons = await User.find({
                position : {
                    $near: {
                        $geometry: {
                            type: `Point`,
                            coordinates: [ user.position.coordinates[0], user.position.coordinates[1] ]
                        },
                        $maxDistance: 50,
                        $minDistance: 0
                    }
                }
            });

            user.contactpersons = contactpersons.map(({ _id }) => ({ _id }));
            //user.contactpersons.push(contactpersons);
            await user.save();
            //console.log(contactpersons);
            res.send(user.contactpersons);
        }catch(err){
           res.status(422).send({error: err.message});
        }
        //res.send(user);

    });
       
module.exports = router; 