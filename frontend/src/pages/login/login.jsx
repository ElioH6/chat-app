import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400/0 backdrop-filter backdrop-blur-lg border border-gray-100/10'>

        <h1 className='text-3xl text-center font-semibold text-gray-300 p-2'>Login
            <span className='text-info px-2'>Chat app</span>
        </h1>
        
        <form>

            <div className='pt-4 h-23'>
                <label className='label pb-1'>
                    <span className='text-base text-gray-300'>Username</span>
                </label>
                <label data-theme="dark" className="input validator input-info">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
                </label>
                <p className="validator-hint">
                Must be 3 to 30 characters
                </p>
            </div>

            <div className='pb-2'>
                <label className='label pb-1'>
                    <span className='text-base text-gray-300'>Email</span>
                </label>
                <label data-theme="dark" className="input validator input-info">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input type="email" placeholder="mail@site.com" required/>
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
            </div>

            <div className='pb-2'>
                <label className='label pb-1'>
                    <span className='text-base text-gray-300'>Password</span>
                </label>

                <label data-theme="dark" className="input validator input-info">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                <input type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                </label>
                <p className="validator-hint hidden">
                Must be more than 8 characters, including:
                <br/>At least one number
                <br/>At least one lowercase letter
                <br/>At least one uppercase letter
                </p>
            </div>

        </form>

      <a className="link link-hover hover:text-info text-gray-300">Don't have an account?</a>
      <div className="pt-2">
        <button data-theme="dark" className="btn w-full text-info">Login</button>
      </div>

      </div>


    </div>
  );
};

export default Login;