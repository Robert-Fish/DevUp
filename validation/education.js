const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateEducationInput(data) {
  let errors = {};

  // Checks if empty
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degreee = !isEmpty(data.degreee) ? data.degreee : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "School cannot be empty";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study cannot be empty";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree cannot be empty";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From cannot be empty";
  }

  return { errors, isValid: isEmpty(errors) };
};
