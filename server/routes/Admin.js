import express from 'express';

const router = express.Router();

router.
get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('admin/admin', {

    });
  } else {
    res.redirect('/login');
  }
}).post('/', (req, res) => {

});

export default router;