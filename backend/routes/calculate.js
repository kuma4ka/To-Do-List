const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    const { a1, a2 } = req.body;
    const result = a1 + a2;
    res.json({ result });
  });
  
router.post('/minus', (req, res) => {
  const { a1, a2 } = req.body;
  const result = a1 - a2;
  res.json({ result });
});

router.post('/multiply', (req, res) => {
  const { a1, a2 } = req.body;
  const result = a1 * a2;
  res.json({ result });
});

module.exports = router;