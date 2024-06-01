import express from "express";
import validateBody from "../decorators/validateBody.js";
import validateId from "../decorators/validateObjectId.js";
import isEmptyBody from "../decorators/isEmptyBody.js";
import { authSignupSchema } from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(authSignupSchema));

export default authRouter;
