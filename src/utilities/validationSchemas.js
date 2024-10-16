import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  email: Yup.string()
    .email("Not a valid email address")
    .required("This field is required"),
  name: Yup.string()
    .max(100, "Name is too long")
    .required("This field is required"),
  subject: Yup.string()
    .max(100, "Subject is too long")
    .required("This field is required"),
  message: Yup.string()
    .max(1000, "Message is too long")
    .required("This field is required"),
});
