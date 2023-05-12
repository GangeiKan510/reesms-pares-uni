import express from 'express';

const router = express.Router();

router.
get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('admin/admin', {

    });
  } else {
    res.send("You are not authorized to access this!");
  }
}).post('/', (req, res) => {

});

export default router;