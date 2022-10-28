import Error from '../404.png';

function Login() {
  return (
    <section className="d-flex justify-content-center align-items-center">
      <img src={Error} alt='error' style={{'width':'100%','height':'100vh'}}></img>
    </section>
  );
}

export default Login;
