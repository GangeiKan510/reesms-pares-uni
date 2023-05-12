import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import { User } from '../models/User.js';

const router = express.Router();

router.
get('/', (req, res) => {
  res.render('register', {
  });
}).post('/', (req, res) => {
  User.register({username: req.body.username, active: false}, req.body.password, (err) => {
    if (err) {
      console.log(err);
      res.redirect('/login');
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/admin');
      });
    }
  });
});

export default router;