import express from 'express';
import bodyParser from 'body-parser';

import { Property } from '../../models/Property.js';
import { SustainabilityFeature } from '../../models/features/SustainabilityFeature.js';
import { Manager } from '../../models/Manager.js';

const router = express.Router();

router.
get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('admin/addProperty', {

    });
  } else {
    res.redirect('/login');
  }
}).post('/', (req, res) => {

  const newProperty = new Property({

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

    })

  });
  
  newProperty.save();

  res.redirect('/property');
});

export default router;