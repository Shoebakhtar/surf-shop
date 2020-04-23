const mongooose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongooose.Schema;

const UserSchema = new Schema({
   email: String,
   image: String
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongooose.model("User", UserSchema);
/*
User
- email      - string
- password   - string
- username   - string
- image      - string
- posts      - array of objects ref Post
*/