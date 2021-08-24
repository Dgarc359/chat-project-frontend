import { TextField } from "@material-ui/core";
import { FieldAttributes, Form, Formik, useField } from "formik";
import React from "react";
import * as yup from "yup";

const MyTextfield: React.FC<FieldAttributes<{}>> = ({ placeholder, ...props }) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
      <TextField placeholder={placeholder} {...field} helperText={errorText} error={!!errorText}/>
    )
  };

const validationSchema = yup.object({
    username: yup
      .string()
      .required(),
    password: yup
        .string()
        .required()
        .min(6)
  });

const LoginForm: React.FC = () => {
    return <div>
        <Formik
            validateOnChange={true}
            initialValues={{
                username: "",
                password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(data)
                setSubmitting(false);
                resetForm();
              }}
        >
            {({ values, errors, isSubmitting}) => (
                <Form>
                    <div>
                        <div>
                        <MyTextfield 
                            placeholder="username"
                            name="userName" 
                            type="input" 
                        />
                        </div>
                        <MyTextfield 
                            placeholder="password"
                            name="password" 
                            type="input" 
                        />
                    </div>
                </Form>
            )}

        </Formik>
    </div>
}

export default LoginForm;