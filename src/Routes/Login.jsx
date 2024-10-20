import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post('https://vica.website/api/login', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            }
        })
        .then(function(response){
            console.log(response);
            toast.success("Login successful.", {position: "top-right", autoClose: 3000, hideProgressBar: false,
            closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
            });
            navigate("/Products");
        })
        .catch(function(error){
            console.log(error)
            
        toast.error("Login failed. Please check your credentials.", {position: "top-right", autoClose: 3000, hideProgressBar: false, 
            closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",
        });
        })
        }

    return (
    <div className=" h-screen flex justify-center items-center bg-auth-bg bg-cover bg-center">
        <form onSubmit={handleSubmit} className='text-center h-[550px] w-[450px] rounded-2xl py-6 px-8 bg-white'>
            <h1 className='text-h1Color text-lg font-extrabold leading-8'>Login to Account</h1>
            <p className='text-sm font-semibold leading-5'>Please enter your email and password to continue</p>
            <div className='my-6'>
                <h3 className='text-left'>Email address:</h3>
                <input className='w-full bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" required/>
            </div>
            <div className='mb-44'>
                <h3 className='text-left'>Password</h3>
                <input className='w-full bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md '
                value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" required/>
            </div>
            <div>
                <button type='submit' className='mb-2.5 bg-sky-700 text-white w-9/12 h-10 rounded-md'>Sign In</button>
                <p className='text-sky-700'>Don’t have an account? 
                    <Link to='/Register'>
                        <u className='text-blue-700 font-bold'> Create Account</u>
                    </Link>
                </p>
            </div>
        </form>
        <ToastContainer/>
    </div>
    );
};

export default Login;