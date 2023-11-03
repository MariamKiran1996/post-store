import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Input from "../../components/input";
import { toast } from "react-toastify";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import {LinkedIn} from "react-linkedin-login-oauth2";

const SignupSchema = Yup.object().shape({
  // role: Yup.string().required('Role selection is Required'),
  // name: Yup.string().required('Name is Required'),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(5, "Too Short Password!")
    .required("Password is Required"),
  // confirmPassword: Yup.string().min(5, 'Too Short Password!').required('Password is Required'),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    // role:'',
    // name:'',
    email: "",
    password: "",
    // confirmPassword:''
  });

  const submitForm = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      }
      if (data.message) {
        toast.success(data.message);
      }
      console.log("response", data);
    } catch (error) {
      console.log("error", error);
      toast.error("Signup Error, Try again");
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => {
      console.log("Login Failed");
    },
  });

  const facebookLogin = (response) => {
    console.log(response);
  };
  const linkedinLogin = (data) => {
    console.log(data);
  };

  const linkedinFailure = (error) => {
    console.error(error);
  };

  return (
    <div id="wrapper">
      <section className="signIn d-flex justify-content-center align-items-center pt-3">
        {/* <!-- <div className="signInHead">
        <img src="../html/images/fullLogo.svg" alt="" />
      </div> --> */}
        <div className="signIncard">
          <div className="signInCardHead">
            <h3>Register</h3>
            <h6>Access to our Dashboard</h6>
          </div>
          <Formik
            initialValues={{
              // role:'',
              // name:'',
              email: "",
              password: "",
              // confirmPassword:''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values, "values");
              submitForm(values);
            }}
          >
            {({ isValid, handleSubmit, values }) => (
              <Form>
                {/* <form
                onSubmit={(e) =>{e.preventDefault();
                
                console.log('Usman')}}
            > */}
                {/* <div className="form-group">
            <label htmlFor="name">Role</label>
            <SelectForm.Select aria-label="Default select example">
              <option>Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </SelectForm.Select>
            {errors.role ? (
             <small className="errorText form-text" >{errors.role}</small>
           ) : null}
           
          </div>
          <div className="form-group">
          <Input  id={'name'} labeltext={'Name'} type={'text'} classes={'form-control'}
             placeholder={'Enter Name'} name={'name'}  />
            {errors.name  ? (
             <small className="errorText form-text" >{errors.name}</small>
           ) : null}
           
          </div> */}
                <div className="form-group">
                  <Input
                    id={"exampleInputEmail1"}
                    labeltext={"Email Address"}
                    type={"text"}
                    classes={"form-control"}
                    placeholder={"Enter email"}
                    name={"email"}
                  />

                  {/* {errors.email ? (
             <small className="errorText form-text" >{errors.email}</small>
           ) : null} */}
                </div>
                <div className="form-group passwordField">
                  <Input
                    labeltext={"Password"}
                    type={"password"}
                    classes={"form-control"}
                    placeholder={"Enter Password"}
                    name={"password"}
                  />

                  {/* {errors.password?<small className="errorText form-text" >{errors.password}</small>: null}
            <i className="fas fa-eye eyeIcon"></i> */}
                  <i className="fas fa-eye-slash eyeIcon closeEyeIcon"></i>
                </div>
                {/* <div className="form-group passwordField">
            <Input  labeltext={'Confirm Password'} type={'password'} classes={'form-control'}
             placeholder={'Enter Password again'}  name={'confirmPassword'}/>

              {errors.confirmPassword?<small className="errorText form-text" >{errors.confirmPassword}</small>: null}
            <i className="fas fa-eye eyeIcon"></i>
            <i className="fas fa-eye-slash eyeIcon closeEyeIcon"></i>
          </div> */}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn loginBtn"
                >
                  Signup
                </button>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login mb-3">
                  <span>Register with</span>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="google" onClick={() => googleLogin()}>
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
                <FacebookLogin
                  appId="1074424366816262"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={facebookLogin}
                  cssClass="facebook"
                  icon={<i className="fab fa-facebook-f"></i>}
                  textButton={""}
                  
                />
                {/* <LinkedIn
      clientId="77e29rh3nzqlol"
      onFailure={linkedinFailure}
      onSuccess={linkedinLogin}
      
    >
      Login with LinkedIn
    </LinkedIn> */}

                <div className="text-center dont-have">
                  Already have an account? <Link to="/">Login</Link>
                </div>
                {/* </form> */}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Signup;
