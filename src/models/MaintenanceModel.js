import { Schema, model } from "mongoose";

const MaintenanceSchema = new Schema({
    workshop:{
        type: Schema.Types.ObjectId,
        ref: "workshop",
        require: true
    },
    Vehicle:{
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        require: true
    },
    services:{
        name:{
            type: String,
            require:true
        },
        price:{
            type: Number,
            require: true
        }

        
    },
    date:{
        type: Date,
        require:true
    },
    totalCost:{
        type: Number,
        require:true
    }

})

export default model('Maintenance',MaintenanceSchema)