const mongoose = require('mongoose');
const GeoJSON = require(`mongoose-geojson-schema`);



const pointSchema = new mongoose.Schema({
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const tracksSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //locations: [pointSchema],
    locations: mongoose.Schema.Types.Point
});
tracksSchema.index({ locations: `2dsphere` });


mongoose.model('Tracks', tracksSchema);