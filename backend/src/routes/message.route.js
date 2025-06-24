import express from "express";
import { protectRoute } from "../middleware/protectRoute.middleware";
import { getSidebarUsers } from "../controllers/message.controller";


const router = express.Router();



router.get("/users", protectRoute, getSidebarUsers);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;