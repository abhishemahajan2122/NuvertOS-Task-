const db=require('../../database/models');

const getAllCompoundsService=async(offset,limit)=>{
    try{
        offset=parseInt(offset);
        limit=parseInt(limit);
        const compounds=await db.Compounds.findAndCountAll({
            offset,
            limit,
            order:[['id','asc']]
        })
        return compounds;
    }
    catch(e){
        throw new Error(e);
    }
}

const getCompoundService=async(id)=>{
    try{
        const compound=await db.Compounds.findByPk(id);
        if(compound===null){
            throw new Error('item not found');
        }
        return compound;
    }
    catch(e){
        throw new Error(e);
    }
}

const updateCompoundService=async(id,details)=>{
    try{
        const compound=await db.Compounds.update(details,{where:{id}})
        return compound;
    }
    catch(e){
        throw new Error(e);
    }
}

const addCompoundService=async(details)=>{
    try{
        const compound=await db.Compounds.create(details);
        return compound;
    }
    catch(e){
        throw new Error(e);
    }
}

const deleteCompoundService=async(id)=>{
    try{
        const compound=await db.Compounds.destroy({ where: { id } });
        console.log(compound,'ser');
        return compound;
    }
    catch(e){
        throw new Error(e);
    }
}

module.exports={getAllCompoundsService,getCompoundService,updateCompoundService,addCompoundService,deleteCompoundService};