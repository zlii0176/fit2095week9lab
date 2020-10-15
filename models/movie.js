let mongoose = require('mongoose');
let movieSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title:String,
    year:Number,
    actors:[{
        type:mongoose.Types.ObjectId,
        ref:"Actor"
    }],
    rating:{
        type:Number,
        validate:{
            validator:function(newRating){
                return newRating>=1 && newRating<=5
            },
            message:"Rating shoule between 1 to 5"
        }
    }
});

module.exports=mongoose.model("Movie",movieSchema);