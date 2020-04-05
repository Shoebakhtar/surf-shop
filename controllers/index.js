const User = require('../models/user');
const passport = require('passport');
const localStrategy = require('passport-local');

module.exports = {

    // POST /register
    async postRegister(req, res, next){
        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                image: req.body.image
            }
        );
        
        await User.register(newUser, req.body.password, (err, user) =>{
            if(err){
                console.log(err);
                res.redirect('/register')
            }
            passport.authenticate('local')(req, res, () =>{
                res.redirect('/');
            })
        });
        // try{
        //     await User.register(newUser, req.body.password);
        // } catch(err){
        //     return next(err);
        // }
        // res.redirect('/');
    },

    //POST /login
    postLogin(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
        })(req ,res, next);
    },

    // GET /logout
    getLogout(req, res, next){
        req.logout();
        res.redirect('/');
    }
}