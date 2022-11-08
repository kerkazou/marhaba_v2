import Nav from './Nav';
import axios from '../../axios';

function Livreur() {
  const storage = JSON.parse(localStorage.getItem('user'));
  axios.apiAuthorizationLivreur();
  
  return (
    <div>
      <Nav />
      <div className="m-5">Bonjour  {storage.first_name} {storage.last_name}, votre rôle est : {storage.role}</div>
    </div>
  );
}

export default Livreur;
