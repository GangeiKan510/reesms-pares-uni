import express from 'express';
import passport from 'passport';

import { Property } from '../../models/Property.js';

const router = express.Router();

router
.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    
    Property.find().then((results) => {

      res.render('admin/properties', {

        results: results

      });
    })
  } else {
    res.redirect('/login');
  }
}).get('/:propertyName', (req, res) => {

  if (req.isAuthenticated()) { 

    Property.find({ name: req.params.propertyName }).then((result) => {
      if (result) {

        res.render('admin/profileProperty', {
          results: result[0]
        })
      } else {
        res.send("No property found.");
      }
      
    }).catch(err => console.log('Caught:', err.message));
    
  } else {
    res.redirect('/login');
  }
}).get('/:propertyName/delete', (req, res) => {

  if (req.isAuthenticated()) {

    Property.deleteOne({name: req.params.propertyName}).then((result) => {
      if (result) {

        res.redirect('/property');

      } else {
        res.send("Unsuccessfeul deletion.");
      }
      
    }).catch(err => console.log('Caught:', err.message));
    
  } else {
    res.redirect('/login');
  }
}).get('/:propertyName/edit', (req, res) => {

  if (req.isAuthenticated()) {

    res.send("You can edit this property on this page.");
    
  } else {
    res.redirect('/login');
  }
}) 
.post('/', (req, res) => {

});

export default router;