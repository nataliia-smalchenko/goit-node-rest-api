import { isValidObjectId } from "mongoose";
import HttpError from "./HttpError.js";

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw HttpError(404, `${id} not valid id`);
  }
  next();
};

export default validateId;
