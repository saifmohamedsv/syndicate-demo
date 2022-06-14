import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import InputHandler from "../../components/InputHandler";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
const initValues = {
  owner: "",
  mobile: "",
  landline: "",
  email: "",
  nationalID: "",
  address: "",
  projectAddress: "",
  section: "",
  government: "",
  city: "",
};

const validateSchema = Yup.object({
  owner: Yup.string().required(),
  mobile: Yup.string().required(),
  landline: Yup.string().required(),
  email: Yup.string().required(),
  nationalID: Yup.string().required(),
  address: Yup.string().required(),
  projectAddress: Yup.string().required(),
  section: Yup.string().required(),
  government: Yup.string().required(),
  city: Yup.string().required(),
});

export default function Create() {
  const { id } = useParams();
  return (
    <Box dir="rtl">
      <Typography my={4} variant="h4" fontSize={{ md: "32px", xs: "18px" }}>
        {id}
      </Typography>
      <Formik validationSchema={validateSchema} initialValues={initValues}>
        {(formikProps) => (
          <Form>
            <Grid container spacing={4}>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="owner" label="اسم المالك" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="mobile" label="محمول" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="landline" label="تليفون" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="email" label="بريد الكتروني" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler
                  fullWidth
                  name="nationalID"
                  label="الرقم القومي"
                />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="city" label="المدينه" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="government" label="المحافظه" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="section" label="القسم" />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <InputHandler fullWidth name="address" label="عنوان المالك" />
              </Grid>
              <Grid item xs={12}>
                <InputHandler
                  fullWidth
                  name="projectAddress"
                  label="عنوان المشروع"
                />
              </Grid>
              <Grid item xs={12}>
                <Button sx={{ p: 1 }} fullWidth variant="contained">
                  SAVE
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
