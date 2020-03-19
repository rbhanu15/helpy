const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const GeoJSON = require(`mongoose-geojson-schema`);


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    position: mongoose.Schema.Types.Point,
    contactpersons: []
});

userSchema.index({ position: `2dsphere` });


userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatepassword){
   const user = this;
    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatepassword, user.password, (err,isMatch)=>{
            if(err){
                return reject(err);
            }
            if(!isMatch){
                return reject(false);
            }            
            resolve(true);
        });
    });
};


mongoose.model(`User`, userSchema);