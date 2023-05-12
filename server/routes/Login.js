import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';

import { User } from '../models/User.js';

const router = express.Router();

router.
get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('admin/admin', {
    });
  } else {
  res.render('login', {
  });
}}).post('/', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/admin');
      });
    }
  })
});

export default router;