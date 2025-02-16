import express from 'express';
import { Strategy as GitHubStrategy} from 'passport-github2';
import passport from 'passport';
const auth = express.Router();
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
(accessToken, refreshToken, profile, cb)=>{
    //some db actions
}))
