const shortid=require("shortid");
const URL =require('../models/models')
async function handelgeneraterNewUrl(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})
    const shortId=shortid(8);
    await URL.create({
        shortID:shortId,
        redirecturl:body.url,
    visithistory:[]
    })
    return res.json({id:shortId})
}


async function handleGetAnalytics(req,res) {
    const shortID=req.params.shortID;
    const result = await URL.findOne({shortID})
    return res.json({totalClicks:result.visithistory.length,
        analytics:result.visithistory})
}










module.exports = {
    handelgeneraterNewUrl,
    handleGetAnalytics,
}