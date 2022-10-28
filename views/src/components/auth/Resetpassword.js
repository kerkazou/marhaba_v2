import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

function Resetpassword() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

  return (
    <section class="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} class="fw-bold col-lg-4 col-md-6 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center gap-1 py-5">
            <div class="h2 fw-bold logo">Reset Password</div>
            <div class="form-floating text-muted col-10">
                <input type="password" {...register('password', { required: 'Password is required', minLength:{value:3, message: 'Password is weak'} })} class="form-control" id="floatingInput" placeholder="Password"></input>
                <label for="floatingInput">Password</label>
                <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="password"/></div>
            </div>
            <div class="form-floating text-muted col-10">
                <input type="password" {...register('confirmepassword', { required: 'Confirmation password is required', minLength:{value:3, message: 'Password is weak'} })} class="form-control" id="floatingPassword" placeholder="Confirme Password"></input>
                <label for="floatingPassword">Confirme Password</label>
                <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="confirmepassword"/></div>
            </div>
            <div className="col-10 d-flex justify-content-between align-items-center mt-3">
              <a className="text-dark" href="forgetpassword">Forgot Password</a>
              <a className="text-dark" href="register">Register</a>
            </div>
            <div class="w-50 form-group d-flex justify-content-center position-relative">
                <button type="submit" class="btn rounded p-3 px-5 fw-bold position-absolute">Change</button>
            </div>
        </form>
    </section>
  );
}

export default Resetpassword;
