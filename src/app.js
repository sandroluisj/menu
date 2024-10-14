import express from 'express';
import connectDB from "./config/db.js"
import WorkshopRouter  from "./router/WorkshopRouter.js";
import VehicleRouter  from "./router/VehicleRouter.js";
import MaintenanceRouter from "./router/maintenanceRouter.js";
connectDB()
const app = express()
app.use(express.json())

app.use('/Workshop',  WorkshopRouter)
app.use ('/Vehicle', VehicleRouter)
app.use('/Maintenance', MaintenanceRouter)

app.listen(3000,()=> console.log("Server running on port 3000"))