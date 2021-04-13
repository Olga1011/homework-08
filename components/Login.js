import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./form.css";
import { users } from "./Registration";

const Login = () => {
  let [userLoggedIn, setUserLoggedIn] = React.useState(false);

  const handleOnSubmit = (values) => {
    let user = users.find(
      (elem) => elem.login === values.login && elem.password === values.password
    );
    // console.log("users are:", users);
    console.log("user is:", user);

    if (user !== undefined) {
      alert("Logged in succesefully");
      setUserLoggedIn(true);
    }
    if (user === undefined) {
      setUserLoggedIn(false);
      const error = "Please enter a valid email and password";
      return alert(error);
    }
  };
  return (
    <div>
      {!userLoggedIn ? (
        <div>
          <h1>Login</h1>
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
                  <button type="submit" name="submit">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
