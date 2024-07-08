var admindb = require('../model/adminmodel');

exports.register = async(req,res)=>{
    var data = await admindb.create(req.body)
    res.status(200).json({
        status: "added",
        data
    })
}

exports.login = async(req,res)=>{
   
    var data =await admindb.find({email:req.body.email});
   
 
        if(data.length ==1)
        {
            if(req.body.password == data[0].password)
            {              
    
                res.status(200).json({
                    status:"login successfull", 
                })
            }
            else{
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        }
        else{
        
            res.status(200).json({
                status:"check your email and password"
            })
        }
    }
   
    exports.views= async(req,res)=>{
        var data = await admindb.find()
        res.status(200).json({
            status: "view all data",
            data
        })
    }  

