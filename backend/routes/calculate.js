const express = require('express');
const router = express.Router();

const Calculator = require('../services/calculator');
const History = require('../services/history');

router.post('/calculate/add', (req, res) => {
    const { a1, a2 } = req.body;
    const sum = Calculator.add(a1, a2);
    History.add(JSON.stringify(sum));
    res.json(sum);
});

router.post('/calculate/minus', (req, res) => {
    const { a1, a2 } = req.body;
    const difference = Calculator.minus(a1, a2);
    History.add(JSON.stringify(difference));
    res.json(difference); 
});

router.post('/calculate/multiply', (req, res) => {
    const { a1, a2 } = req.body;
    const product = Calculator.multiply(a1, a2);
    History.add(JSON.stringify(product));
    res.json(product);
});

module.exports = router;
