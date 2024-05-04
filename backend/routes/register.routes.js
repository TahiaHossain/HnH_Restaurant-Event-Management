const express = require('express');
const router = express.Router();
const { createUser, activateUser, handleSendVerificationEmail } = require('../controllers/register.controller');
const uploadFile = require('../middlewares/uploadfile');
const { userUploadFile } = require('../src/secret');

const upload = uploadFile(userUploadFile);

router.post('/', upload.single('image'), createUser);
router.get('/verify/:token/', activateUser);
router.get('/send-verification-email', handleSendVerificationEmail);

module.exports = router;
