import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

const validateId = (req, _, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw HttpError(404, `${id} not valid id`);
  }
  next();
};

export default validateId;
