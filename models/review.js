const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const ReviewSchema = new Schema({
   body: String,
   rating: Number,
   author: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
})

module.exports = mongooose.model("Review", ReviewSchema);

/*
Review    
- body            - string
- author          - object id (ref User)
*/