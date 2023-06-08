import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

const baseUrl = process.env.PORT || 8800;

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)