const router=require('express').Router();
const connection=require('./connect');
router.get('/',(req,res)=>{
    res.send('welcome');
});

router.get('/home',(req,res)=>{
    res.send('This is a home route');
});


router.post('/register',(req,res)=>{
    var details=req.body;
    res.send(details);
});
router.get("/students",(req,res)=>{
    sql="select * from csed";
    connection.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(result);    
            res.send(result);
        }
    });
});
router.post('/insert',(req,res)=>{
    var details=req.body;
    sql=`insert into csed values('${details.name}','${details.Rollno}')`;
    connection.query(sql,(error,result)=>{
        if(error)
        {
            console.log(error);
            res.send(error);        }
        else{
            console.log(result);
            res.send(result);
        }

    });
});
module.exports = router;