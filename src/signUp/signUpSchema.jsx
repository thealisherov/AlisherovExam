import * as Yup from "yup";
export const signupSchema = Yup.object({
  name: Yup.string().required("Name is requires"),
  email: Yup.string().email("Email isnot valid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should be formed from 6 sign")
    .required("Parol is required"),
});
