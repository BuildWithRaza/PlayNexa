import mongoose from 'mongoose'

const skillSchema = mongoose.Schema(
    {
        player:{
            
        }
    }
);

module.exports = mongoose.model("Skill", skillSchema);