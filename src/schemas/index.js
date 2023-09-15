import * as yup from "yup";

// AUTH SCHEMAS

const passwordRules = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
// regex for password - min 8 characters, 1 capital letter, 1 number, 1 special character

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "The password you entered is too short")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters long, contain one capital letter, one number and one special character",
    })
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Entered passwords must match")
    .required("This field is required"),
  acceptedTOS: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "The password you entered is too short")
    .matches(passwordRules, {
      message:
        "Password must be at least 8 characters long, contain one capital letter, one number and one special character",
    })
    .required("This field is required"),
});

// TORNADO SCHEMA

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const tornadoSchema = yup.object().shape({
  Title: yup
    .string()
    .min(2, "Minimum length: 2 characters")
    .max(20, "Maximum length: 20 characters")
    .required("This field is required"),
  ShortMessage: yup
    .string()
    .min(2, "Minimum length: 2 characters")
    .max(40, "Maximum length: 40 characters")
    .required("This field is required"),
  Message: yup
    .string()
    .min(2, "Minimum length: 2 characters")
    .max(200, "Maximum length: 200 characters")
    .required("This field is required"),
  ForAll: yup.boolean().required("This field is required"),
  Attachment: yup
    .mixed()
    .test("is-valid-type", "Not a valid image type", (value) => {
      if (!value) {
        return true; // if there is no file, skip the validation
      }

      return isValidFileType(value.name, "image");
    })
    .test("is-valid-size", "Max allowed size is 100KB", (value) => {
      if (!value) {
        return true; // if there is no file, skip the validation
      }

      return value && value?.size <= MAX_FILE_SIZE;
    }),
});
