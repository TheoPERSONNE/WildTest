const express = require("express");
const router = express.Router()
const NameCtrl = require('../controllers/nameControler')

router.post('/', NameCtrl.createName);
router.get('/', NameCtrl.getAllNames)

module.exports = router