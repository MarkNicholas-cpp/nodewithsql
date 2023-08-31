const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student',
    port:'3306'
});

connection.connect(err=>{
    if(!err) {
        console.log('connected');
    }
    else{
        console.log("Error detected",err);
    }

});
module.exports=connection;