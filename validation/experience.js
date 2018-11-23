const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateExperienceiput(data) {
  let errors = {};

  // Checks if empty
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title cannot be empty";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company cannot be empty";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From cannot be empty";
  }

  return { errors, isValid: isEmpty(errors) };
};
