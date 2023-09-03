const express = require('express');
const router = express.Router();


const healthRouter = require('./health');
const calculateRouter = require('./calculate');
const historyRouter = require('./history');

router.use(healthRouter);
router.use(calculateRouter);
router.use(historyRouter);

module.exports = router;