import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from"../../firebase.init"
import Button from 'react-bootstrap/Button';
import {signInWithEmailAndPassword,  createUserWithEmailAndPassword,getAuth, sendEmailVerification, sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider, connectAuthEmulator} from "firebase/auth";
import { computeHeadingLevel } from '@testing-library/react';


const Login = () => {
    const [validated, setValidated] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();

      return;
    };
    
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
        setError('Password minimum one special character')
        return;
    }

    setValidated(true);
       setError('');

       if(registered){
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
       }
       else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setEmail('');
            setPassword('');
            emailVerify();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message);
            // ..
        });
       }

        event.preventDefault();
    };
    const emailVerify =()=>{
        sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
    }

    const handleResetPassword = ()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
        })

       
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    const provider = new GoogleAuthProvider();
    const signInGoogle =()=>{
        signInWithPopup(auth,provider)
        
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const handleRegisterChange = event =>{
        setRegistered(event.target.checked)
    }
    
    return (
        <div className='container'>
            <div className=' md:w-100 my-5 bg-info mx-auto Larger shadow rounded-3'>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    <h2 className="text-center text-danger p-3">Please {registered ?'Login' : 'Register'} !!</h2>
                    <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className=" mb-3 px-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                    <p className='text-danger'>{error}</p>
                    </Form.Group>
                    <Form.Group className="d-flex px-5" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegisterChange} type="checkbox" label="Already Register" />

                        <Button onChange={handleResetPassword} variant="link mt-0">Forget Password?</Button>
                    </Form.Group>
                    <Button variant="primary ms-5 mb-5  px-4" type="submit">
                        {registered ? 'Login':'Register'}
                    </Button>
                    <Button onClick={signInGoogle} variant="danger  mb-5 ms-2">Google</Button>
                </Form>
            </div>
            
        </div>
    );
};

export default Login;