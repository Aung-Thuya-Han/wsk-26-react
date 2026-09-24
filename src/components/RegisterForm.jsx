const RegisterForm = () => {
    return (
        <>
            <h1>Register</h1>
            <form>
                <div>
                    <label htmlFor="register-user">Username</label>
                    <input id='register-user' type="text" />
                </div>

                <div>
                    <label htmlFor="register-email">Email</label>
                    <input id='register-email' type="email" />
                </div>

                <div>
                    <label htmlFor="register-password">Password</label>
                    <input id = 'register-password' type="password" />
                </div>

                <button type = 'submit'>Register</button>
            </form>
        </>
    )

}

export default RegisterForm;