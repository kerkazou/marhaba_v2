import Logoauth from './Logoauth';
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from '../../axios';


function Register() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        axios.apiRegister(data);
    }

  return (
    <section className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="fw-bold col-lg-4 col-md-6 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center gap-1 py-5">
            <Logoauth />
            <div className="text-muted h5">have't an account ?</div>
            <div className="col-10">
                <div className="form-floating text-muted">
                    <input type="text" {...register('first_name', { required: 'First Name is required', pattern: {value:/^[A-Za-z]+$/i, message: 'Is not name'}, minLength:{value:3, message: 'First Name is weak'} })} className="form-control" id="floatingInput" placeholder="First Name"></input>
                    <label htmlFor="floatingInput">First Name</label>
                    <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="first_name"/></div>
                </div>
                <div className="form-floating text-muted">
                    <input type="text" {...register('last_name', { required: 'Last Name is required',pattern: {value:/^[A-Za-z]+$/i, message: 'Is not name'}, minLength:{value:3, message: 'Last Name is weak'} })} className="form-control" id="floatingInput" placeholder="Last Name"></input>
                    <label htmlFor="floatingInput">Last Name</label>
                    <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="last_name"/></div>
                </div>
            </div>
            <div className="form-floating text-muted col-10">
                <input type="text" {...register('email', { required: 'Email is required', pattern:{value:/^\w.+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/, message: 'Email incorrect'} })} className="form-control" id="floatingInput" placeholder="Email"></input>
                <label htmlFor="floatingInput">Email address</label>
                <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="email"/></div>
            </div>
            <div className="form-floating text-muted col-10">
                <input type="password" {...register('password', { required: 'Password is required', minLength:{value:3, message: 'Password is weak'} })} className="form-control" id="floatingPassword" placeholder="Password"></input>
                <label htmlFor="floatingPassword">Password</label>
                <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="password"/></div>
            </div>
            <div className="form-floating text-muted col-10">
                <input type="password" {...register('confirm_password', { required: 'Confirmation password is required', minLength:{value:3, message: 'Password is weak'} })} className="form-control" id="floatingPassword" placeholder="Confirm Password"></input>
                <label htmlFor="floatingPassword">Confirm Password</label>
                <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="confirm_password"/></div>
            </div>
            <div className="col-10 d-flex justify-content-between align-items-center mt-3">
                <a className="text-dark" href="login">Login</a>
            </div>
            <div className="w-50 form-group d-flex justify-content-center position-relative">
                <button type="submit" className="btn rounded p-3 px-5 fw-bold position-absolute">Register</button>
            </div>
        </form>
    </section>
  );
}

export default Register;
