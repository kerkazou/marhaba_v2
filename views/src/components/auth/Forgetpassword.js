import Logoauth from './Logoauth';
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

function Forgetpassword() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

  return (
    <section class="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} class="fw-bold col-lg-4 col-md-6 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center gap-3 py-5">
            <Logoauth />
            <div class="text-muted h5">Forget password ?</div>
            <div class="form-floating text-muted col-10">
                <input type="text" {...register('email', { required: 'Email is required', pattern:{value:/^\w.+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/, message: 'Email incorrect'} })} class="form-control" id="floatingInput" placeholder="Email"></input>
                <label for="floatingInput">Email address</label>
                <div className='mt-1 text-danger'><ErrorMessage errors={errors} name="email"/></div>
            </div>
            <div class="col-10 d-flex justify-content-between align-items-center mt-3">
                <a class="text-dark" href="login">Login</a>
                <a class="text-dark" href="register">Register</a>
            </div>
            <div class="w-50 form-group d-flex justify-content-center position-relative">
                <button type="submit" class="btn rounded p-3 px-5 fw-bold position-absolute">Send</button>
            </div>
        </form>
    </section>
  );
}

export default Forgetpassword;
