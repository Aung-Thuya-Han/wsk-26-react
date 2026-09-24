// imports here
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useState} from 'react';


const Login = () => {

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    {showLogin ? 
      <LoginForm/> : <RegisterForm/>
    }

    <button type='button' onClick={() =>

    setShowLogin(!showLogin)
    }>

    {showLogin ? 'Create an account' :
    "Log in here"}

    </button>



    </>
  );
};

export default Login;