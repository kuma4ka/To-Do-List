const express = require('express');
const router = express.Router();

const { instanceHistory } = require('../services/history');

router.get('/', (req, res) => {
        res.json(instanceHistory.getHistory());
    });

router.delete('/', (req, res) => {
        instanceHistory.deleteHistory();
        res.json('History was deleted');
    });

module.exports = router;