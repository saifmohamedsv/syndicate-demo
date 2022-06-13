import React from "react";
import TextField from "@mui/material/TextField";
import { useField, ErrorMessage } from "formik";

function InputHandler(props) {
  const [field, meta] = useField(props);
  return (
    <TextField
      error={meta.error && meta.touched}
      {...field}
      {...props}
      autoComplete="off"
      helperText={<ErrorMessage name={field.name} />}
    />
  );
}

export default InputHandler;
