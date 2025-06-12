import express from "express";
import protectedRouteController from "../controllers/protected.controller.js";
import verifyToken from "../middlewares/jwt.token.middleware.js";  

const router = express.Router();

router.get('/protected', verifyToken, protectedRouteController.protectedRoute);

export default router;