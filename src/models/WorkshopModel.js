import { Schema, model } from "mongoose";

const WorkshopSchema = new Schema({
    
        name:{
            type: String,
            require:true
        },
        address:{
            type: String,
            require: true
        },
        specialties:{
            type: [String],
            require : true
        }
})

export default model('Workshop',WorkshopSchema)