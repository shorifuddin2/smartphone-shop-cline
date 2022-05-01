import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import app from"../../firebase.init"
import Button from 'react-bootstrap/Button';
import {  createUserWithEmailAndPassword,getAuth} from "firebase/auth";



const auth = getAuth();
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    // const [validated, setValidated] = useState(false);

    const handleFormSubmit = event => {

        const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        event.preventDefault();
    };
    
    return (
        <div className='container'>
            <div className='w-50 md:w-100 my-5 mx-auto Larger shadow rounded-3'>
                <Form onSubmit={handleFormSubmit}>
                    <h2 className="text-center  p-3">Login</h2>
                    <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button variant="primary mx-5 mb-5 px-4" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;