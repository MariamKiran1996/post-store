import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Input from '../../components/input';
import { toast } from 'react-toastify';
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import useCall from '../../hooks/useCall';
const LoginSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().min(5, 'Too Short Password!').required('Password is Required'),
});

const Login =()=> {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const [userData, setUserData] = useState({
    token:'',
    name:'',
    email:'', 
  })

  const submitForm =async(values)=>{
   try{
    const data= useCall('POST', 'http://localhost:3000/api/login',values );
      // const response = await fetch('http://localhost:3000/api/login',{
      //   method:'POST',
      //   headers: new Headers({
      //      'content-type':'application/json'
      //   }),
      //   body: JSON.stringify(values)

      // })
      // const data = await response.json();
      console.log("data", data);
      if(data.error){
        toast.error(data.error)
      }
      if(data.token){
        sessionStorage.setItem("token", data.token);
        toast.success('Login Success');
        navigate("/");
      }

   }
   catch(error){
    console.log('error', error);
    toast.error('Login error, Try again')
   }

  }
  const createUser = async (values) => {
    console.log("values", values, userData);
    try {
      const response = await fetch("http://localhost:3000/api/signup", 
      {
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

  const onChange = (event) =>{
   const value = event.target.value;
   setFormData({
    ...formData,
    [event.target.name]: value,
   })


  }

  const googleLogin = useGoogleLogin(
    {
      
    onSuccess: async (tokenResponse) => {
      let token;
      if (tokenResponse){
        token = tokenResponse.access_token;
        const headers = {'Authorization': `Bearer ${token}`};
        const response =await fetch('https://www.googleapis.com/oauth2/v3/userinfo',{headers});
        const data = await response.json();
        console.log(data,response, 'data');
        let userData ={token:'', name:'', email:''}
        if(data){
         
          userData.token=token;
          userData.name= data.name;
          userData.email= data.email;
         
        }
        createUser(userData);
        submitForm(userData);
       

      }
      console.log(tokenResponse, token);
    },
    onError: () => {
      console.log("Login Failed");
    },
  }
  );

  const facebookLogin = (response) => {
    let userData ={token:'', name:'', email:''}
    if(response){
     
      userData.token=response.accessToken;
      userData.name= response.name;
      userData.email= response.email;
     
    }
    createUser(userData);
    submitForm(userData);
  };


  return (
    <div id="wrapper">
    <section className="signIn pt-4">
      
      <div className="signIncard">
        <div className="signInCardHead">
          <h3>Login</h3>
          <h6>Access to our Dashboard</h6>
        </div>

      <Formik
       initialValues={{
        email:'',
        password:''
       }}
       validationSchema={LoginSchema}
       onSubmit={
        values => {submitForm(values)}}
       
      >
        {({errors, touched, handleSubmit})=>(
          <Form>
          <div className="form-group">
            <Input  id={'exampleInputEmail1'} labeltext={'Email Address'} type={'email'} classes={'form-control'}
             placeholder={'Enter email'} name={'email'}  />
             {errors.email ? (
             <small className="errorText form-text" >{errors.email}</small>
           ) : null}
            {/* {errors.email?<small className="errorText form-text" >{errors.email}</small>: null} */}
          </div>
          <div className="form-group passwordField">
          <Input id={'exampleInputPassword1'} labeltext={'Password'} type={'password'} classes={'form-control'}
             placeholder={'Enter Password'}  name={'password'} />
           
           {errors.password?<small className="errorText form-text" >{errors.password}</small>: null}
            <i className="fas fa-eye eyeIcon"></i>
            <i className="fas fa-eye-slash eyeIcon closeEyeIcon"></i>
          </div>

          <div className="form-check">
            <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1"
              >Remember me</label>
              </div>
            
            <div>
              <Link to='/forgot-password' className="forgetPassText">Forget Password?</Link>
            </div>
          </div>
         
          <button type="submit" className="btn loginBtn" onClick={handleSubmit}  >Login</button>
          </Form>
        )}

      </Formik>
        
          <div className="login-or">
            <span className="or-line"></span>
            <span className="span-or">or</span>
          </div>
         
          <div  className="social-login mb-3"><span >Login with</span>
          <FacebookLogin
                  appId="1074424366816262"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={facebookLogin}
                  cssClass="facebook"
                  icon={<i className="fab fa-facebook-f"></i>}
                  textButton={""}
                  
                />
            <a  href="#" className="google" onClick={() => googleLogin()}><i  className="fab fa-google"></i></a>
            <a  href="#" className="facebook"><i className="fab fa-linkedin"></i></a>
          </div>
        

          
          <div  className="text-center dont-have"> Don't have an account yet? <Link to='/signup'>Register</Link></div>
        
       


      </div>
    </section>
   
  </div>
  )
  
}

export default Login;
