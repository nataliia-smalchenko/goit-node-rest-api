import multer from "multer";
import path from "path";
import { allowedFormats } from "../constants/user-constants.js";
import HttpError from "../helpers/HttpError.js";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, callback) => {
    const uniquePreffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniquePreffix}_${file.originalname}`;
    callback(null, filename);
  },
});

const limits = {
  filesize: 1024 * 1024 * 6,
};

const fileFilter = (req, file, callback) => {
  const extension = file.originalname.split(".").pop();
  if (!allowedFormats.includes(extension)) {
    return callback(HttpError(400, "Extension not allowed"));
  }
  callback(null, true);
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

export default upload;
