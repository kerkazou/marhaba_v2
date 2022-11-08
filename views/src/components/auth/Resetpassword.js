import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from '../../axios';
import Nav from '../user/Nav';

function Resetpassword() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        axios.apiResetpassword(data);
    }

  return (
    <div>
        <Nav />
        <div class="d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} class="fw-bold col-lg-4 col-md-6 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center gap-1 py-5">
                <div class="h2 fw-bold logo">Reset Password</div>
                <div class="form-floating text-muted col-10">
                    <input type="password" {...register('password', { required: 'Password is required', minLength:{value:3, message: 'Password is weak'} })} class="form-control" id="floatingInput" placeholder="Password"></input>
                    <label htmlFor="floatingInput">Password</label>
                    <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="password"/></div>
                </div>
                <div class="form-floating text-muted col-10">
                    <input type="password" {...register('confirmepassword', { required: 'Confirmation password is required', minLength:{value:3, message: 'Password is weak'} })} class="form-control" id="floatingPassword" placeholder="Confirme Password"></input>
                    <label htmlFor="floatingPassword">Confirme Password</label>
                    <div className='mt-2 text-danger'><ErrorMessage errors={errors} name="confirmepassword"/></div>
                </div>
                <div class="w-50 form-group d-flex justify-content-center position-relative">
                    <button type="submit" class="btn rounded p-3 px-5 fw-bold position-absolute" style={{'background-color': 'var(--color2)', 'color': 'var(--white)'}}>Change</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Resetpassword;
