import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { sendEmailController } from "../controllers/auth.controller.js";

import { signupOtpValidate } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", validateUser(registerSchema), register);
router.post("/login", validateUser(loginSchema), login);
router.post("/logout", logout);
router.post("/send-otp-student-mail", sendEmailController);
router.post("/validate-otp-signup-student", signupOtpValidate);

export default router;
