import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../contex';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')

    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Login'></MyInput>
                <MyInput type='password' placeholder='Password'></MyInput>
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
}

export default Login;