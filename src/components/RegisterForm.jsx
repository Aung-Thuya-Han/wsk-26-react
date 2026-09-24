import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {

    const initValues = {
        username: '',
        email: '',
        password: '',
    };

    const {postUser} = useUser();

    const doRegister = async () => {
       
        try {
        const result = await postUser(inputs);
        console.log(result);
        } catch(error) {
            console.log(error);
        }
        
    };

    const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="register-user">Username</label>
                    <input name='username' id='register-user' type="text" onChange={handleInputChange} />
                </div>

                <div>
                    <label htmlFor="register-email">Email</label>
                    <input name='email' id='register-email' type="email" onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="register-password">Password</label>
                    <input name = 'password' id = 'register-password' type="password" onChange={handleInputChange} />
                </div>

                <button type = 'submit'>Register</button>
            </form>
        </>
    )

}

export default RegisterForm;