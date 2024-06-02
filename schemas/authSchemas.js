import Joi from "joi";
import { subscriptionList } from "../constants/user-constants.js";

export const authSignupSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().valid(...subscriptionList),
});

export const authSigninSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
});

export const authEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});
