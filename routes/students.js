const express=require('express')
const router =express.Router()
const Student=require('../models/student')

router.get('/',async(req,res)=>{
   try {
    const students= await Student.find()
    res.json(students)
   } catch (err) {
    res.send('error'+err)
   }
})
router.post('/',async (req,res)=>{
    const student= new Student({
        name: req.body.name,
        regNo: req.body.regNo,
        branch: req.body.branch
    })
try {
   const s1= await student.save()
   res.json(s1);
    
} catch (err) {
    res.send('Error')
}



})
module.exports = router