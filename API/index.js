import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

const port = process.env.PORT || 8800;

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });