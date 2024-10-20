import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();

        
            const formData = new FormData();
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('user_name', username);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('password_confirmation', confirmPassword);
            formData.append('profile_image', profileImage);

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            console.log("sss", formData.values());
        // eslint-disable-next-line no-unused-vars
        const response = await axios
        .post("https://vica.website/api/register", formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        })
        .then(function (response) {
            console.log(response);
            setToken(response.data.data.token); 
            localStorage.setItem("token", response.data.data.token);
            const f = localStorage.getItem("token");
            console.log("f", f);
            navigate("/Products");
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    return (
        <div className=" h-screen flex justify-center items-center bg-auth-bg bg-cover bg-center">
            <form onSubmit={handleSubmit} className="text-center w-[750px] rounded-2xl py-6 px-8 bg-white">
                <h1 className="text-h1Color text-lg font-extrabold leading-8">Create an Account</h1>
                <p className="text-sm font-semibold leading-5">Create an account to continue</p>
                <div className="my-6 flex justify-between items-center gap-4">
                    <div>
                        <h3 className='text-left'>First Name:</h3>
                        <input className='bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md'
                        value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name' required/>
                    </div>
                    <div>
                        <h3 className='text-left'>Last Name:</h3>
                        <input className='bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                        value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Last Name' required/>
                    </div>
                    <div>
                        <h3 className='text-left'>User Name:</h3>
                        <input className='bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                        value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='User Name' required/>
                    </div>
                </div>
                <div className="">
                    <h3 className='text-left'>Email Address</h3>
                    <input className='w-full bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                    value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" required/>
                </div>
                <div className="my-6 flex justify-between items-center">
                    <div>
                        <h3 className='text-left'>Password</h3>
                        <input className='w-80 bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                        value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' required/>
                    </div>
                    <div>
                        <h3 className='text-left'>Confirm Password</h3>
                        <input className='w-80 bg-gray-100 h-10 mt-2.5 pl-2.5 border-2 border-slate-200 border-solid rounded-md' 
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='********' required/>
                    </div>
                </div>
                <div className="mb-4">
                <input type="file" className="hidden" id="profile-image"
                onChange={(e) => setProfileImage(e.target.files[0])}/>
                <label htmlFor="profile-image" className="block text-left text-gray-700 font-medium mb-2 cursor-pointer">
                Profile Image:
                {profileImage ? (
                    <img className='rounded-full w-24 h-24' src={URL.createObjectURL(profileImage)}/>
                ) : (
                    <img className='rounded-full w-24 h-24' src="public/assets/profile-avatar.png"/>
                )}
                </label>
            </div>
                <div>
                    <button type='submit' className='my-3 bg-sky-700 text-white w-6/12 h-10 rounded-md'>Sign Up</button>
                    <p className='text-sky-700 '>Already have an account? 
                        <Link to='/'>
                            <u className='text-blue-700 font-bold'> Login</u>
                        </Link>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register;