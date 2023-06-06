import React from "react";
import { Formik } from "formik";
import UserRegSchema from "../validation-schema/UserRegSchema";

const App = () => {
  // const handleSubmit = (data) => {
  //   console.log(data);
  //   // Perform any additional actions here
  // };
  return (
    <>
      <div className="reg_form">
        <div className="reg_form_content">
          <h2>Sign Up</h2>
          <Formik
            initialValues={{
              name: "",
              gender: "",
              email: "",
              password: "",
              confirm_password: "",
              check_box: false,
            }}
            validationSchema={UserRegSchema}
            onSubmit={(data, action) => {
              //handleSubmit(data);
              console.log(data);
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
              errors,
              values,
            }) => {
              //console.log(values);
              return (
                <form onSubmit={handleSubmit}>
                  <div className="input_block">
                    <label htmlFor="name" className="input_label">
                      Name
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="name"
                      placeholder="Enter your name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form_error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input_block">
                    <div className="gender_block">
                      <label htmlFor="gender" className="input_label">
                        Gender
                      </label>
                      <div className="gender_input_block">
                        <input
                          type="radio"
                          autoComplete="off"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.gender === "male"}
                        />
                        <span>Male</span>
                        <input
                          type="radio"
                          autoComplete="off"
                          name="gender"
                          onChange={handleChange}
                          value="female"
                          onBlur={handleBlur}
                          checked={values.gender === "female"}
                        />
                        <span>Female</span>
                      </div>
                    </div>
                    {errors.gender && touched.gender ? (
                      <p className="form_error">{errors.gender}</p>
                    ) : null}
                  </div>
                  <div className="input_block">
                    <label htmlFor="email" className="input_label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form_error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input_block">
                    <label htmlFor="password" className="input_label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      placeholder="Enter your password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form_error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input_block">
                    <label htmlFor="confirm_password" className="input_label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      placeholder="Confirm password"
                      onChange={handleChange}
                      value={values.confirm_password}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form_error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="input_block">
                    <div className="check-box">
                      <input
                        type="checkbox"
                        autoComplete="off"
                        name="check_box"
                        onChange={handleChange}
                        //value={values.check_box}
                        onBlur={handleBlur}
                        checked={values.check_box}
                      />
                      <span>I accept all the terms and conditions</span>
                      {errors.check_box && touched.check_box ? (
                        <p className="form_error">{errors.check_box}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="modal_btn">
                    <button type="submit">Register</button>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default App;
