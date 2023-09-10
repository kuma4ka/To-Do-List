const express = require('express');
const router = express.Router();

const healthRouter = require('./health');
const calculateRouter = require('./calculate');
const historyRouter = require('./history');

router.use("/health", healthRouter);
router.use("/calculate", calculateRouter);
router.use("/history", historyRouter);

module.exports = router;