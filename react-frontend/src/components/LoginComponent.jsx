import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

function LoginComponent() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[showSuccess,setShowSuccess] = useState(false)
    const[loginFailed,setLoginFailed] = useState(false)

    let navigate = useNavigate();
   function loginClicked(e){
        e.preventDefault()
       if(username==='admin' && password === 'admin'){
           AuthenticationService.registerSuccessfulLogin(username,password)
           setShowSuccess(true)
           navigate('/employees')
       }
       else{
           setLoginFailed(true)
           setShowSuccess(false)
           
            
           
       }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2>Login Authentication</h2>
                            <div className='card-body'>
                                {loginFailed && <h3 className='text-center'>Invalid Credential</h3>}
                            <form>
                                <div className='form-group'>
                                    <label>User Name:</label>
                                        <input placeholder='User Name' name='username' className='form-control' value={username} onChange={(e) =>setUsername(e.target.value)} />
                                        <label>Password:</label>
                                        <input placeholder='Password' type='password' name='password' className='form-control' value={password} onChange={(e) =>setPassword(e.target.value)} />
                                        <br/>
                                        <button className='btn btn-success' onClick={loginClicked}>Login</button>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LoginComponent;