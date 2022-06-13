import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("من فضلك اكتب بريد الكتروني صحيح").required(" "),
  password: Yup.string().required(" "),
});
