import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy} from 'passport-google-oauth20';
const router = express.Router();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
function (access_token, refresh_token, profile, done){
    
}))