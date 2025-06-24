import express from "express"
import { login, logout, singup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";


const router = express.Router();


router.post("/singup", singup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;