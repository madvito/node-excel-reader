const express = require('express');
const readExcel = require('../controllers/read');

const router = express.Router();

router.get('/read', readExcel)

module.exports = router;