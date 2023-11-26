import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json"


const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn, googleLogin } = useContext(AuthContext);

    const handleGoogleSignIn = (googleLogin) => {
        googleLogin()
            .then(() => {
                toast('Logged in Successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    style: {
                        backgroundColor: 'green',
                        color: 'black',
                        border: '2px solid #f00',
                        borderRadius: '8px',
                        padding: '16px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    },
                    closeOnClick: true,
                    theme: 'colored',
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                const errorMessage = error.message;
                setLoginError(errorMessage);
            });
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(() => {
                toast('Logged in Successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    style: {
                        backgroundColor: 'green',
                        color: 'black',
                        border: '2px solid #f00',
                        borderRadius: '8px',
                        padding: '16px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    },
                    closeOnClick: true,
                    theme: 'colored',
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(() => {
                setLoginError("Your Email or password is not Matching");
            });
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="md:w-1/2 lg:w-1/2 p-6">
                <h2 className="text-6xl font-bold my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="mb-4 relative">
                            <input className="input input-bordered w-full"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id=""
                                placeholder="Password"
                                required />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        {loginError && <p className="text-red-700">{loginError}</p>}
                    </div>
                    <div className="form-control mt-6 mb-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="text-xl text-center font-bold"> Or</p>
                </form>
                <div className="flex justify-center">
                    <button onClick={() => handleGoogleSignIn(googleLogin)} className="btn btn-secondary mt-3 md:w-3/4 lg:w-1/2 mx-auto">
                        <FcGoogle className="text-4xl"></FcGoogle>
                    </button>
                </div>
                <p className="text-center mt-4">Do not have an account? Please <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
            </div>

            {/* Right Column with Animation (Replace with your animation content) */}
            <div className="md:w-1/2 lg:w-1/2 hidden md:flex lottie flex-1  mx-20" >
                <Lottie animationData={loginAnimation} loop={false}></Lottie>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
