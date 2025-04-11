const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Chào mừng đến với ứng dụng Node.js + Express!');
});

module.exports = router;
