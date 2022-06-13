import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import {
  FormContainer,
  LoginContainer,
  FormTitle,
  SubmitButton,
} from "./style";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputHandler from "../../components/InputHandler";
import { connect } from "react-redux";
import { OnLogin } from "../../store/actions/Login";
import { loginSchema } from "../../components/validationSchema";

const Login = (props) => {
  return (
    <Box sx={LoginContainer}>
      <Box>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            props.OnLogin();
          }}
        >
          {(formikProps) => (
            <Form>
              <Box sx={FormContainer}>
                <img src="/assets/eeakb.jpg" width="120" height="120" alt="" />
                <Typography variant="h1" color={"primary.main"} sx={FormTitle}>
                  تسجيل الدخول
                </Typography>
                <InputHandler fullWidth name="email" label="بريد الكتروني *" />
                <InputHandler fullWidth name="password" label="كلمه سر *" />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={SubmitButton}
                >
                  استمرار
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { OnLogin })(Login);
