const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Map
router.get('/indoor-map', (req, res) => res.render('indoor-map'));
router.get('/vector-map', (req, res) => res.render('vector-map'));

module.exports = router;
