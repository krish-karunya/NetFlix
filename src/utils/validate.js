export const checkValidateData = (email, password) => {
  //here we are using REGEX for validation and while we installing create-react-app test cases also installed
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  // if (!isNameValid) {
  //   return "Invalid Name ";
  // }
  if (!isEmailValid) {
    return "Invalid Email ID";
  }

  if (!isPasswordValid) {
    return "Invalid Password ";
  }

  return null;
};
