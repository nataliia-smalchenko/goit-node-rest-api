export const handleSaveError = (error, data, next) => {
  error.status = 400;
  next();
};

export function setUpdateSettings(next) {
  this.setOptions({
    new: true,
    runValidators: true,
  });
  next();
}
