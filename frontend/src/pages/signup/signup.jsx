import { useContext, useState } from 'react'
import GenderCheck from './genderCheck';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const { setLoading } = useContext(AuthContext);

    const onCheckChange = (gender) => {
        setInputs({
            ...inputs,
            gender
        })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { fullName, username, email, password, confirmPassword, gender } = inputs;

        if (!fullName || !username || !email || !password || !confirmPassword || !gender) {
            alert("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            return;
        }
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, username, email, password, confirmPassword, gender })
            })

            if (!res.ok) {
                setLoading(false);
                throw new Error(res.statusText);
            }

            navigate('/login');
            
        } catch (error) {
            console.log(error);
            alert('internal server error', error.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400/0 backdrop-filter backdrop-blur-lg border border-gray-100/10'>
    
            <h1 className='text-3xl text-center font-semibold text-gray-300 p-2'>Signup
                <span className='text-info px-2'>Chat app</span>
            </h1>
            
            <form onSubmit={handleSubmit}>
    
                <div className='pt-4 pb-2'>
                    <label className='label pb-1'>
                        <span className='text-base text-gray-300'>Full name</span>
                    </label>
                    <label data-theme="dark" className="input validator input-info">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" required placeholder="Full name" pattern="[A-Za-z][A-Za-z0-9\-\s]*" minLength="3" maxLength="30" title="Only letters, numbers or dash"
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                     />
                    </label>
                    <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    </p>
                </div>

                <div className='h-auto pb-2'>
                    <label className='label pb-1'>
                        <span className='text-base text-gray-300'>Username</span>
                    </label>
                    <label data-theme="dark" className="input validator input-info">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" 
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                    </label>
                    <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    </p>
                </div>

                <div className='pb-2'>
                    <label className='label pb-1'>
                        <span className='text-base text-gray-300'>Email</span>
                    </label>
                    <label data-theme="dark" className="input validator input-info">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" placeholder="mail@site.com" required 
                    value={inputs.email}
                    onChange={(e) => setInputs({...inputs, email: e.target.value})}
                    />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                </div>
    
                <div className='pb-2'>
                    <label className='label pb-1'>
                        <span className='text-base text-gray-300'>Password</span>
                    </label>
    
                    <label data-theme="dark" className="input validator input-info">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                    </label>
                    <p className="validator-hint hidden">
                    Must be more than 8 characters, including:
                    <br/>At least one number
                    <br/>At least one lowercase letter
                    <br/>At least one uppercase letter
                    </p>
                </div>
    
                <div className='pb-4'>
                    <label className='label pb-1'>
                        <span className='text-base text-gray-300'>Confirm password</span>
                    </label>
    
                    <label data-theme="dark" className="input validator input-info">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type="password" required placeholder="Password" pattern={inputs.password} title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                    </label>
                    <p className="validator-hint hidden">
                    Passwords do not match
                    </p>
                </div>

                <GenderCheck onCheckChange={onCheckChange} gender={inputs.gender} />
                <Link to="/login" className="link link-hover hover:text-info text-gray-300">Already have a account?</Link>
                <div className="pt-2">
                    <button type="submit" data-theme="dark" className="btn w-full text-info">Signup</button>
                </div>
    
            </form>
    
    
          </div>
    
    
        </div>
      );
    }

export default Signup