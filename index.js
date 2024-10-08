const express = require('express')
const { ConnecttoDB}=require('./connect')
const app =express();
const urlRoute=require("./routes/url")
const port=8002;
const URL=require('./models/models')
app.use(express.json())
app.use('/url',urlRoute)

ConnecttoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log("mongoDB connected"))

app.use('/:shortID',async(req,res)=>{
    const shortID=req.params.shortID;
 const entry =  await URL.findOneAndUpdate({
        shortID
    },{ $push:{
        visithistory: {
            timestamp:Date.now()
        },
    },
})
res.redirect(entry.redirecturl)
})




app.listen(port,()=> console.log('server started at PORT',port))

 