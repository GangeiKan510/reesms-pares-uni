import express from 'express';
import passport from 'passport';

import { Property } from '../../models/Property.js';
import { Manager } from '../../models/Manager.js';
import { SustainabilityFeature } from '../../models/features/SustainabilityFeature.js';

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
}).post('/search/:keyword', (req, res) => {

  if (req.isAuthenticated()) { 

    Property.find({ $or: 
      [
        { name: { $regex: new RegExp(req.params.keyword, 'i') } }, 
      ] 
    })
    .then((result) => {

      res.render('admin/properties', {
        
        results: result,
      });
    })
    .catch((err) => {
      console.error(err);
      // Handle the error
    });
      
    } else {
      res.redirect('/login');
  }
}).get('/:propertyName', (req, res) => {

  if (req.isAuthenticated()) { 

    Property.find({ name: req.params.propertyName }).then((result) => {
      if (result) {
        console.log(result);
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

    Property.find({ name: req.params.propertyName }).then((result) => {
      if (result) {

        res.render('admin/editProperty', {
          results: result[0]
        })
      } else {
        res.send("No property found.");
      }
      
    }).catch(err => console.log('Caught:', err.message));
    
  } else {
    res.redirect('/login');
  }
}).post('/:propertyName/edit', (req, res) => {

  if (req.isAuthenticated()) {

    Property.updateOne(
      {name: req.params.propertyName},
      { $set: {
        name: req.body.propertyTitle,
        location: req.body.propertyLocation,
        email: req.body.propertyEmail,
        facebookPage: req.body.propertyFacebookPage,
        instagramProfile: req.body.propertyInstagramProfile,
        twitterProfile: req.body.propertyTwitterProfile,
        description: req.body.propertyDescription,
        manager: new Manager({
          name: req.body.managerName,
          email: req.body.managerEmail,
          telNumber: req.body.managerTelNumber,
          mobileNumber: req.body.managerMobileNumber,
          address: req.body.managerAddress
        }),
        sustainabilityFeature: new SustainabilityFeature({

          typeOfRenewableEnergy: req.body.typeOfRenewableEnergy,
          waterConservationMethod: req.body.waterConservationMethod,
          hazardLevel: req.body.hazardLevel,
          hazardDescription: req.body.hazardDescription

        })}
      },
        {overwrite: true}
      ).then(result => {
        res.redirect('/property/' + req.params.propertyName)
      })
      .catch(err => {
        // Handle the error
        console.error(err);
      });
    
  } else {
    res.redirect('/login');
  }
}) 

export default router;