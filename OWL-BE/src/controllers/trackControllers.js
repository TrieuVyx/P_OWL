const message = require("../constants/constansHttpStatus");

class TrackController{
    async CreateTrack(req,res){
        try{

        }
        catch(err){
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({message:message.INTERNAL_SERVER_ERROR.MESSAGE})
        }
    }
    async GetTrack(req,res){
        try{

        }
        catch(err){
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({message:message.INTERNAL_SERVER_ERROR.MESSAGE})
        }
    }
    async UpdateTrack(req,res){
        try{

        }
        catch(err){
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({message:message.INTERNAL_SERVER_ERROR.MESSAGE})
        }
    }
    async DeleteTrack(req,res){
        try{

        }
        catch(err){
            return res.status(message.INTERNAL_SERVER_ERROR.CODE).json({message:message.INTERNAL_SERVER_ERROR.MESSAGE})
        }
    }
    
}
module.exports = new TrackController();