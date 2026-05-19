import express, { application, json } from "express";
import clerkWebhooks from "../controllers/clerk.controller.js";

const router = express.Router();

router.post("/clerkWebhook", express.raw({type: application/json}) , clerkWebhooks)

export default router