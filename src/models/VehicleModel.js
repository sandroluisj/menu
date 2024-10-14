import { Schema, model } from "mongoose";

const VehicleSchema = new Schema({
    plate:{
        type: String,
        require:true
    },
    model:{
        type: String,
        require: true
    },
    year:{
        type: Number,
        require: true
    },
    owner:{
        type: String,
        require: true
    },
    maintence:{
        type: Schema.Types.ObjectId,
        ref: "maintence",
        require: true
    }
})
export default model('vehicle',VehicleSchema)
