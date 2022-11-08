import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const apiLogin = (login) => {
    axios.post('http://localhost:4000/api/auth/login', login)
        .then((res) => {
            if(res.data.role){
                localStorage.setItem('user', JSON.stringify(res.data))
                window.location.replace(`api/user/${res.data.role}/me`)
            }else{
                toastr.warning(res.data.message, {
                    positionClass: "toast-bottom-left"
                })
            }
        }).catch((error) => {
            console.log(error)
        });
}

const apiRegister = (register) => {
    axios.post('http://localhost:4000/api/auth/register', register)
      .then((res) => {
          alert(JSON.stringify(res.data))
          window.location.replace('login')
      }).catch((error) => {
          console.log('error')
      });
}

const apiForgetPassword = (forgetpassword) => {
    axios.post('http://localhost:4000/api/auth/forgetPassword', forgetpassword)
    .then((res) => {
        window.location.replace('/Login')
    }).catch((error) => {
        console.log(error)
    });
}

const apiResetpassword = (resetpassword) => {
    axios.post('http://localhost:4000/api/auth/resetPassword', resetpassword)
        .then((res) => {
            apiLogout();
        }).catch((error) => {
            console.log(error)
        });
}

const apichangePassword = (changePassword) => {
    axios.post('http://localhost:4000/api/auth/changePassword', changePassword)
        .then((res) => {
            window.location.replace('/login')
        }).catch((error) => {
            console.log(error)
        });
}

const apiLogout = () => {
    axios.get('http://localhost:4000/api/auth/logout')
        .then((res) => {
            localStorage.clear();
            window.location.replace('/login')
        }).catch((error) => {
            console.log(error)
        });
}

const apiAuthorizationClient = () => {
    axios.get('http://localhost:4000/api/user/client/me')
        .then((res) => {
            if(!res.data.message){
                if(!res.data.role){
                    window.location.replace('/login')
                }else{
                    window.location.replace(`/api/user/${res.data.role}/me`)
                }
            }
        }).catch((error) => {
            console.log(error)
        });
}
const apiAuthorizationManager = () => {
    axios.get('http://localhost:4000/api/user/manager/me')
        .then((res) => {
            if(!res.data.role){
                window.location.replace('/login')
            }else{
                window.location.replace(`/api/user/${res.data.role}/me`)
            }
        }).catch((error) => {
            console.log(error)
        });
}
const apiAuthorizationLivreur = () => {
    axios.get('http://localhost:4000/api/user/livreur/me')
        .then((res) => {
            if(!res.data.role){
                window.location.replace('/login')
            }else{
                window.location.replace(`/api/user/${res.data.role}/me`)
            }
        }).catch((error) => {
            console.log(error)
        });
}

export default {
    apiLogin,
    apiRegister,
    apiForgetPassword,
    apiResetpassword,
    apichangePassword,
    apiLogout,
    apiAuthorizationClient,
    apiAuthorizationManager,
    apiAuthorizationLivreur
};