import React from 'react';
import { useNavigate } from 'react-router-dom';
const Sobre = () => {

  const navigate = useNavigate();
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorName, setErrorName] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [errorPass, setErrorpass] = React.useState(null);


  function validaName(value){

    if(value.length === 0){
      setError('Este campo não pode ser vazio');
    }
  }

  function valida(value){

    if(value.length === 0){
      setError('Este campo não pode ser vazio');
    }
  }

  function validaPass(password){

    if(password.length < 6){
      setErrorpass('A senha não pode ter menos de 6 caracteres');
    }else{
      window.location.reload();
    }
  }

  function handleSubbmit(event){
    event.preventDefault();
    validaName(nome);
    valida(email);
    validaPass(password);
  }


    function handleClick() {
        console.log('Fazer login');
        navigate('/');
      }

  return (
    <div>
    
    <form onSubmit={handleSubbmit}>

      <h1 id="invision">Invision</h1>


      <p className="titulo">Getting Started</p>

      <label htmlFor="email">Full Name</label>
      <input className="teste" id="nome" type="nome" name="nome" value={nome}  onChange={(event) => setNome(event.target.value)} />
      {errorName && <p className="error">{errorName}</p>}

      <label htmlFor="email">Users name or Email</label>
      <input className="teste" id="email" type="email" name="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
      {error && <p className="error">{error}</p>}

      <label htmlFor="Password">Create Password</label>
      <input className="teste" id="password" type="password" name="password" value={password}  onChange={(event) => setPassword(event.target.value)} />
      {errorPass && <p className="error">{errorPass}</p>}
      {error && <p className="error">{error}</p>}
      
      <button className="button">Sign in</button>

      <fieldset class="or">
          <legend>Or</legend>
      </fieldset>

      <button className="button2">Sign in with Google</button>

      <p>By signing up, you agree to Invision<br></br><a className="privacidade">Terms of Conditions</a> and <a>Privacy Policy</a></p>

      <p>Already on Invision? <a onClick={handleClick}>Log in</a></p>

    </form>
 
  </div>
  );
};

export default Sobre;
