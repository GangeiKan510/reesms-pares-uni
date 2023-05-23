import express from 'express';

const router = express.Router();

import { Property } from '../models/Property.js';

router.
get('/', (req, res) => {
  if (req.isAuthenticated()) {

    Property.find({ 'sustainabilityFeature.hazardLevel':  { $gte: 3 }})
    .then((result) => {
      // Process the 'result' array containing the matching documents
      
      console.log(result);
      
      res.render('admin/admin', {
        
        results: result

      })
    })
    .catch((err) => {
      console.error(err);
      // Handle the error
    });

  } else {
    res.redirect('/login');
  }
}).post('/', (req, res) => {

});

export default router;