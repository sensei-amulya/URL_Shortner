const express=require('express')
const router=express.Router();
const {handelgeneraterNewUrl, handleGetAnalytics}=require('../controllers/url')

router.post('/',handelgeneraterNewUrl)

router.get('/analytics/:shortID',handleGetAnalytics)

module.exports =router;