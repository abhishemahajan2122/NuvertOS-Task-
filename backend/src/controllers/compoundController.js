const compoundServices=require('../services/compoundServices')

const getAllCompounds=async(req,res)=>{
    try{
        const page=req.query.page;
        const offset=(page-1)*(req.query.limit);
        const response=await compoundServices.getAllCompoundsService(offset,req.query.limit);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const getCompound=async(req,res)=>{
    try{
        const response=await compoundServices.getCompoundService(req.params.id);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const updateCompound=async(req,res)=>{
    try{
        const response=await compoundServices.updateCompoundService(req.params.id,req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const addCompound=async(req,res)=>{
    try{
        const response=await compoundServices.addCompoundService(req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

const deleteCompound=async(req,res)=>{
    try{
        const response=await compoundServices.deleteCompoundService(req.params.id);
        if(response===1){
            return res.send([1]);
        }
        else{
            return res.send([0]);
        }
    }
    catch(e){
        return res.status(400).send(e.message);
    }
}

module.exports={getAllCompounds,getCompound,updateCompound,addCompound,deleteCompound};