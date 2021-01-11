import express from "express";
const router = express.Router();
import authMiddleware from "../middlewares/auth";

import controller from "../controllers/usersController";

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);

router.use(authMiddleware);

router.get("/info", controller.getUsers);
router.get("/info/:id", controller.getUserById);

router.put("/update/:id", controller.updateUser);
router.put("/update-password/:id", controller.updatePassword);

router.delete("/:id", controller.deleteUser);

export default router;
