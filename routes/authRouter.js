import express from "express";
import validateBody from "../middlewares/validateBody.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import { authSigninSchema, authSignupSchema } from "../schemas/authSchemas.js";
import authControllers from "../controllers/authControllers.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(authSignupSchema),
  authControllers.signup
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(authSigninSchema),
  authControllers.signin
);

authRouter.get("/current", authenticate, authControllers.getCurrent);
authRouter.post("/logout", authenticate, authControllers.logout);

export default authRouter;
