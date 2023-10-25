import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Input from '../../components/input';
import { toast } from 'react-toastify';

const LoginSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().min(5, 'Too Short Password!').required('Password is Required'),
});

const Login =()=> {
  
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const submitForm =(values)=>{
    toast.success("Login Error");
    
    console.log("parent function", formData, values);

  }

  const onChange = (event) =>{
   const value = event.target.value;
   setFormData({
    ...formData,
    [event.target.name]: value,
   })

  }


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
         
          <div  className="social-login mb-3"><span >Login with</span><a  href="#" className="facebook"><i  className="fab fa-facebook-f"></i></a>
            <a  href="#" className="google"><i  className="fab fa-google"></i></a>
            <a  href="#" className="facebook"><i className="fab fa-linkedin"></i></a>
          </div>
        

          
          <div  className="text-center dont-have"> Don't have an account yet? <Link to='/signup'>Register</Link></div>
        
       


      </div>
    </section>
   
  </div>
  )
  
}

export default Login;
