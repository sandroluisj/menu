import mongoose from "mongoose"

const connectDB = async () => {
    mongoose 
        .connect('mongodb://localhost:27017/mecanica')
        .then(()=> console.log('connected to mongoDB'))
        .catch((error) => console.log(error))
}
export default connectDB