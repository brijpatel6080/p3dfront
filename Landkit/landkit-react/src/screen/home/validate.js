/* eslint-disable */
const validate = (values) => {
  console.log("values", values);
  const errors = {};

  if (!values.Title) {
    errors.Title = "Title field shouldn’t be empty";
  } else if (/[0-9-*-+]+/g.test(values.Title)) {
    errors.Title = "Invalid name given. ";
  }

  if (!values.Description) {
    errors.Description = "Description field shouldn’t be empty";
  } 
  if (!values.Image) {
    errors.Image = "Image field shouldn’t be empty";
  } 

  if (!values.Category) {
    errors.Category = "Category field shouldn’t be empty";
  }

  if (!values.url) {
    errors.url = "Source Url field shouldn’t be empty";
  }

  if (!values.Author) {
    errors.Author = "Author field shouldn’t be empty";
  }

  if (!values.medical_registration_number) {
    errors.medical_registration_number =
      "Medical Registration Number field shouldn’t be empty";
  } else if (/\D/.test(values.medical_registration_number)) {
    errors.medical_registration_number =
      "Invalid Medical Registration Number given. ";
  }

  // if (!values.username) {
  //   errors.username = "Username field shouldn’t be empty";
  // }
  // if (!values.email) {
  //   errors.email = "Email field shouldn’t be empty";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  // if (!values.url) {
  //   errors.url = "Url field shouldn’t be empty";
  // } else if (
  //   !/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(
  //     values.url
  //   )
  // ) {
  //   errors.url = "Invalid url";
  // }
  // if (!values.password) {
  //   errors.password = "Password field shouldn’t be empty";
  // } else if (values.password !== "dragon") {
  //   errors.password = "The password is incorrect";
  // }
  // if (!values.select) {
  //   errors.select = "Please select the option";
  // }

  return errors;
};

export default validate;
