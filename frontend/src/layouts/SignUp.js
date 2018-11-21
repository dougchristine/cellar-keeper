import React from 'react';

const signUp = () => (
    <div className='sign-up'>
        <form className='sign-up__form'>
            <input type='text' className='sign-up__email' placeholder='Email' />
            <input type='password' className='sign-up__password' placeholder='Password' />
            <input
                type='password'
                className='sign-up__password-repeat'
                placeholder='Retype Password'
            />
            <submit className='sign-up__submit'>Sign Up</submit>
        </form>
    </div>
);

export default signUp;
