import express from "express"
import { protect } from "../middlewares/auth"
import { getAllProjects, getProjectById, getUserCredits, toggleProjectVisibility } from "../controllers/users.controller"

const router = express.Router()

router.get("/get-credits", protect, getUserCredits)
router.get("/get-all-projects", protect, getAllProjects)
router.get("/get-project/:projectId", protect, getProjectById)
router.get("/toggle-project-visibility/:projectId", protect, toggleProjectVisibility)

export default router