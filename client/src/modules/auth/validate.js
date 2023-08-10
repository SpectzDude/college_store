import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    userName: Yup.string().required("User Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    collegeId: Yup.string()
        .required("College ID is required")
        .matches(/^MCC[A-Za-z0-9]*$/, "College ID should start with MCC"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords do not match")
        .required("Confirm Password is required"),
    gender: Yup.string().required("Gender is required")
});


export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required")
});

