import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { clerkMiddleware } from "@clerk/express"

dotenv.config()
const app = express();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})

app.get("/", (request, response) => {
    response.json("Server is Live !")
})

//Clerk Web Hook
import webHook from "./routes/clerk.routes.js"
app.use("/api", webHook)