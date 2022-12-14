import React from "react";
import Logoauth from './Logoauth';
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from '../../axios';

function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    axios.apiLogin(data);
  }

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="fw-bold col-lg-4 col-md-6 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center gap-1 py-5">
          <Logoauth />
          <div className="text-muted h5">Have an account ?</div>
          <div className="form-floating text-muted col-10">
              <input type="text" {...register('email', { required: 'Email is required', pattern:{value:/^\w.+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/, message: 'Email incorrect'} })} className="form-control" id="floatingInput" placeholder="Email"></input>
              <label htmlFor="floatingInput">Email address</label>
              <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="email"/></div>
          </div>
          <div className="form-floating text-muted col-10">
              <input type="password" {...register('password', { required: 'Password is required', minLength:{value:3, message: 'Password is weak'} })} className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label htmlFor="floatingPassword">Password</label>
              <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="password"/></div>
          </div>
          <div className="col-10 d-flex justify-content-between align-items-center mt-3">
              <a className="text-dark" href="forgetpassword">Forgot Password</a>
              <a className="text-dark" href="register">Register</a>
          </div>
          <div className="w-50 form-group d-flex justify-content-center position-relative">
              <button type="submit" className="btn rounded p-3 px-5 fw-bold position-absolute">Login</button>
          </div>
      </form>
    </section>
  );
}

export default Login;