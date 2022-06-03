const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    crew: {
        type: String,
        minlength: [3, "Crew needs to be at least 3 characters"],
        required: [true, "Crew is required"]
    },
    ship:{
        type: String,
        default: "HA! Scooner"
    },
    phrase: {
        type: String,
        default: "I like rum!"
    },
    treasure: {
        type: Number,
        default: 0
    },
    image:{
        type: String
    },
    attributes:{
        type: Array,
        default: "man"
    },
    pegLeg:{
        type: Number,
        default:0
    },
    eyePatch:{
        type: Number,
        default:0
    },
    hook:{
        type: Number,
        default:0
    },
    featurePegleg:{
        type: Boolean,
        default:false
    },
    featurePatch:{
        type: Boolean,
        default:false
    },
    featureHook:{
        type: Boolean,
        default:false
    },
    featureRum:{
        type: Boolean,
        default:false
    },
    featureTreasure:{
        type: Boolean,
        default:false
    },
    likes:{
        type: Number,
        default: 0
    },
    mates:{
        type:Array,
        default: 0
    }
},{timestamps:true});

const Pirates = mongoose.model('Pirates', PirateSchema);

module.exports = Pirates;