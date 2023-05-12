import express from 'express';
import passport from 'passport';

const router = express.Router();

router
.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('admin/properties', {

    });
  } else {
    res.send("You are not authorized to access this!");
  }
}).post('/', (req, res) => {

});

export default router;