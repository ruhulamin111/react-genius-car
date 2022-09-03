import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h2 className='text-center'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <p className='my-2 '>Have an account? <Link to='/signup' className=' text-decoration-none'>Sign up</Link></p>
        </div>
    );
};

export default SignIn;