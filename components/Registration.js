import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./form.css";

export const users = [];

const Registration = () => {
  const [register, setRegister] = React.useState(false);
  const handleOnSubmit = (values) => {
    setRegister(true);
    users.push(values);
    console.log(users);
    alert("Registration successfully ");
  };
  return (
    <div>
      {!register ? (
        <div>
          <h1>Register</h1>
          <Formik
            initialValues={{
              login: "",
              password: "",
            }}
            validationSchema={Yup.object({
              login: Yup.string().email().required("Required"),
              password: Yup.string()
                .min(5, "Must be at least 5 characters")
                .required("Required"),
            })}
            onSubmit={handleOnSubmit}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <Field
                  className="field"
                  name="login"
                  type="text"
                  placeholder="Login"
                />
                {errors.login && touched.login ? (
                  <div className="errorMessage">{errors.login}</div>
                ) : null}
                <Field
                  className="field"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="errorMessage">{errors.password}</div>
                ) : null}

                <div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : null}
    </div>
  );
};

export default Registration;
