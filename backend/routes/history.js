const express = require('express');
const router = express.Router();

const History = require('../services/history');

router
    .get('/history', (req, res) => {
        res.json(`${History.getHistory()}`);
    })
    .delete('/history', (req, res) => {
        History.deleteHistory;
        res.json('History was deleted');
    });

module.exports = router;