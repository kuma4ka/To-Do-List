const express = require('express');
const router = express.Router();

const сalculator = require('../services/calculator');
const { instanceHistory } = require('../services/history');

router.post('/add', (req, res) => {
    const { a1, a2 } = req.body;
    const sum = сalculator.add(a1, a2);
    instanceHistory.add(JSON.stringify(sum));
    res.json(sum);
});

router.post('/minus', (req, res) => {
    const { a1, a2 } = req.body;
    const difference = сalculator.minus(a1, a2);
    instanceHistory.add(JSON.stringify(difference));
    res.json(difference); 
});

router.post('/multiply', (req, res) => {
    const { a1, a2 } = req.body;
    const product = сalculator.multiply(a1, a2);
    instanceHistory.add(JSON.stringify(product));
    res.json(product);
});

module.exports = router;
