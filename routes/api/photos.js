const express = require('express');

const router = express.Router();
const photosCtrl = require('../../controllers/api/photos');

router.get('/', photosCtrl.getPhotos);

module.exports = router