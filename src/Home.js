import React from 'react';
import Google from './Google.svg';
import './App.css';
import './App.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(null);
    const [errorPass, setErrorpass] = React.useState(null);
  
    function valida(value){
  
      console.log(value);
      if(value.length === 0){
        setError('Este campo não pode ser vazio');
      }else{
        window.location.reload();
      }
    }
  
    function validaPass(password){
      console.log(password);
      if(password.length < 6){
        setErrorpass('A senha não pode ter menos de 6 caracteres');
      }else{
        window.location.reload();
      }
    }
  
    function handleSubbmit(event){
      event.preventDefault();
  
      valida(email);
      validaPass(password);
    }

    const navigate = useNavigate();

    function handleClick() {
        console.log('Fazer login');
        navigate('/sobre');
      }
    

    return(
        <div>
    
          <form onSubmit={handleSubbmit}>
    
            <h1 id="invision">Invision</h1>
    
    
            <p className="titulo">Welcome to Invision</p>
    
            <label htmlFor="email">Users name or Email</label>
            <input className="teste" id="email" type="email" name="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
            {error && <p className="error">{error}</p>}
    
            <label htmlFor="Password">Password</label>
            <input className="teste" id="password" type="password" name="password" value={password}  onChange={(event) => setPassword(event.target.value)} />
            {errorPass && <p className="error">{errorPass}</p>}
            {error && <p className="error">{error}</p>}
    
            <label className="forgotPass">Forgot password?</label>
            
            <button className="button">Sign in</button>
    
            <fieldset class="or">
                <legend>Or</legend>
            </fieldset>
    
            <button className="button2">Sign in with Google</button>
            <p>New Invision?<a onClick={handleClick}>Create Account</a></p>
    
          </form>
       
        </div>
      );
    
    };

export default Home;
