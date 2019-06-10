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

// Routes
router.get('/indoor-map', (req, res) => res.render('indoor-map'));
router.get('/vector-map', (req, res) => res.render('vector-map'));
router.get('/app-event-calender', (req, res) => res.render('app-event-calender'));
router.get('/chart-flot', (req, res) => res.render('chart-flot'));
router.get('/chart-morris', (req, res) => res.render('chart-morris'));
router.get('/chartjs', (req, res) => res.render('chartjs'));
router.get('/chartist', (req, res) => res.render('chartist'));
router.get('/chart-peity', (req, res) => res.render('chart-peity'));                               
router.get('/chart-sparkline', (req, res) => res.render('chart-sparkline'));
router.get('/chart-knob', (req, res) => res.render('chart-knob'));                                                               

module.exports = router;
