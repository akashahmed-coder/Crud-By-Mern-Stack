const router = require('express').Router()
const Data = require("./dataSchema")

router.route("/data")
.get(async(req,res)=>{
   try {
    const data = await Data.find()
    res.json(data)
   } catch (err) {
       res.status(501).json({msg:err.message})
   }
})
// .post("/data",async(req,res)=>{
//    try {
//     const {name,email,phone} = req.body
//     if(!name || !email || !phone){
//         return res.status(400).json({msg:"please fill the input field properly"})
//     }
//     const newData = new Data({
//         name,email,phone
//     })
//     await newData.save()
//     res.json({"data insert Successfull"})
//    } catch (err) {
//     res.status(500).json({msg:err.message})
//    }

// })
.post(async(req,res)=>{
    try {
        const {name,email,phone} = req.body
    if(!name || !email || !phone){
        return res.status(400).json({msg:"please fill the input field properly"})
    }
    const newData =  new Data({
        name,email,phone
    })
    await newData.save()
    res.json({msg:"data insert Successfull"})
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
})
router.route("/data/:id")
.patch(async(req,res)=>{
    
   try {
    console.log(req.params.id)
    const {email , phone , name} = req.body  
    await Data.findOneAndUpdate({_id:req.params.id} , {
        name ,email , phone
    })
    res.json({msg:"update successfull"})
   } catch (err) {
    res.status(500).json({msg:err.message})
   }
})
.delete(async(req,res)=>{
    try {
        await Data.findOneAndDelete({_id:req.params.id})
    res.json({msg:"delete successfull"})
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
})
module.exports = router