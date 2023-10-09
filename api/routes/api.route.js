const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});


router.post("/create-token",async(req,res,next)=>{
  try{
     const {code}=res.body
     
  }catch(error){
    next(error)
  }
})
module.exports = router;
 