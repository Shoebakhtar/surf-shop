const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const PostSchema = new Schema({
   title: String,
   price: String,
   description: String,
   images: [ { url: String, public_id: String } ],
   location: String,
   coordinates: Array,
   author: {
       type: Schema.Types.ObjectId,
       ref: 'Post'
   },
   reviews: [
       {
           type: Schema.Types.ObjectId,
           ref: 'Review'
       }
   ]
})

module.exports = mongooose.model("Post", PostSchema);

/*
Post    
- title            - string
- price            - string
- description      - string
- images           - array of strings
- location         - string
- lat              - number
- lng              - number
- author           - object id (ref Post)
- reviews          - array of objects
*/