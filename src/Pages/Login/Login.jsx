// // import { useContext, useEffect, useState } from 'react';
// // import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// // import { AuthContext } from '../../Provider/AuthProvider';
// // import {NavLink, useLocation, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const Login = () => {
// //     const { signIn, googleRegister } = useContext(AuthContext)


// //     const [disabled, setDisabled] = useState(true);

// //     const navigate = useNavigate()
// //     const location = useLocation()
// //     const from = location.state?.form?.pathname || '/';


// //     useEffect(() => {
// //         loadCaptchaEnginge(6);
// //     }, [])


// //     const handleValidate = (e) => {
// //         const user_captcha_value = e.target.value;
// //         if (validateCaptcha(user_captcha_value)) {
// //             setDisabled(false)
// //         }

// //         else {
// //             setDisabled(true)
// //         }
// //     };

// //     const handleLogin = (event) => {
// //         event.preventDefault();

// //         const form = event.target;
// //         const email = form.email.value;
// //         const password = form.password.value;
// //         console.log(password, email);
// //         signIn(email, password)
// //             .then(result => {
// //                 console.log(result.user)

// //                 Swal.fire({
// //                     title: 'Login Successfully',
// //                     showClass: {
// //                         popup: 'animate__animated animate__fadeInDown'
// //                     },
// //                     hideClass: {
// //                         popup: 'animate__animated animate__fadeOutUp'
// //                     }
// //                 })
// //                 navigate(from, {replace: true})
// //             })
// //             .catch(error => console.log(error))
// //     }
// //     const handleGoogleSignIn = () => {
// //         googleRegister()
// //             .then(result => { console.log(result); })
// //             .catch(error => console.log(error))
// //     }
// //     return (
// //         <div className="hero min-h-screen bg-base-200">
// //             <div className="hero-content">

// //                 <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
// //                     <div className="card-body">
// //                         <div className="form-control">
// //                             <label className="label">
// //                                 <span className="label-text">Email</span>
// //                             </label>
// //                             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
// //                         </div>
// //                         <div className="form-control">
// //                             <label className="label">
// //                                 <LoadCanvasTemplate></LoadCanvasTemplate>
// //                             </label>
// //                             <input onBlur={handleValidate} type="text" placeholder="type to above Captcha" className="input input-bordered" />

// //                         </div>
// //                         <div className="form-control">
// //                             <label className="label">
// //                                 <span className="label-text">Password</span>
// //                             </label>
// //                             <input name='password' type="password" placeholder="password" className="input input-bordered" />
// //                             <label className="label">
// //                                 <a href="#" className="label-text-altNavLinkNavLink-hover">Forgot password?</a>
// //                             </label>
// //                         </div>
// //                         <div className="form-control mt-6">
// //                             <button disabled={false} className="btn btn-primary">Login</button>
// //                         </div>
// //                     </div>
// //                 </form>
// //                 <p>New user please <Navlink to={'/register'}>Register</Navlink></p>
// //                 <div>

// //                     <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google</button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;



// import {  useContext } from 'react';
// // import { loadCaptchaEnginge,  } from 'react-simple-captcha';
// import {NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2'
// import { AuthContext } from '../../Provider/AuthProvider';

// const Login = () => {
//     // const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     // useEffect(() => {
//     //     loadCaptchaEnginge(6);
//     // }, [])

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }

//     // const handleValidateCaptcha = (e) => {
//     //     const user_captcha_value = e.target.value;
//     //     if (validateCaptcha(user_captcha_value)) {
//     //         setDisabled(false);
//     //     }
//     //     else {
//     //         setDisabled(true)
//     //     }
//     // }

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Login</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-altNavLinkNavLink-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             {/* <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input  type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//                             </div> */}
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p><small>New Here? <NavLink to="/register">Create an account</NavLink> </small></p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;



import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import { saveUSer } from '../../api/seveUser';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUSer(user)
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/register">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;