import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUpOnSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Form onSubmit = {handleSignUpOnSubmit} className='w-50 mx-auto my-5 border p-4 rounded'>
                <h3 className='text-primary'>Sign Up</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <p>
                    Already Sign Up? <Link className = "text-decoration-none" to = '/login'>Please Log In</Link>
                </p>
            </Form>
        </div>
    );
};

export default SignUp;