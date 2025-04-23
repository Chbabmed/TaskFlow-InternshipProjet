import {useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import { Alert } from 'antd';
import {axiosClient} from "../../API/axiosAPI.jsx";
import { message } from 'antd';
import {useNavigate} from "react-router-dom";
import { Spin } from 'antd';
import {useEffect, useState} from "react";
import {useUserContext} from "../../context/UserContext.jsx";
import {
    LOGIN_PAGE,
    RESPONSABLE_DEPARTEMENT_DASHBOARD,
    RESPONSABLE_GLOBAL_DASHBOARD,
    RESPONSABLE_SERVICE_DASHBOARD, RESPONSABLE_TACHE_DASHBOARD,
    UNAUTHORIZED_ACCESS
} from "../../router/web.jsx";

function Login() {
    const navigate = useNavigate()
    const {setAuthenticated, login, setUser, user,setToken } = useUserContext()
    const [loading , setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        setError,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async values => {
        setLoading(true)
            login(values.email, values.password).then(
                (value) =>{
                    if(value.status === 200){
                        setLoading(false)
                        console.log(value.response);
                        console.log(value.data.user.Role);
                        window.localStorage.setItem('ACCESS_TOKEN', value.data.access_token)
                        console.log(value.data.user.Role)
                        if (value.data.user.Role == 'Responsable Global'){
                            setAuthenticated('true')
                            window.localStorage.setItem('ROLE', value.data.user.Role)
                            setUser(value.data.user)
                            window.localStorage.setItem('CURRENT_USER', JSON.stringify(value.data.user))
                            navigate(RESPONSABLE_GLOBAL_DASHBOARD)
                        }
                        if (value.data.user.Role === 'Responsable Departement'){
                            setAuthenticated('true')
                            window.localStorage.setItem('ROLE', value.data.user.Role)
                            window.localStorage.setItem('CURRENT_USER', JSON.stringify(value.data.user))
                            navigate(RESPONSABLE_DEPARTEMENT_DASHBOARD)
                        }
                        if (value.data.user.Role === 'Responsable Service'){
                            setAuthenticated('true')
                            window.localStorage.setItem('ROLE', value.data.user.Role)
                            window.localStorage.setItem('CURRENT_USER', JSON.stringify(value.data.user))
                            navigate(RESPONSABLE_SERVICE_DASHBOARD)
                        }
                        if (value.data.user.Role === 'Responsable Tache'){
                            setAuthenticated('true')
                            window.localStorage.setItem('ROLE', value.data.user.Role)
                            window.localStorage.setItem('CURRENT_USER', JSON.stringify(value.data.user))
                            navigate(RESPONSABLE_TACHE_DASHBOARD)

                        }
                        if(value.data.user.Role !== 'Responsable Global'&&value.data.user.Role !== 'Responsable Departement'&&value.data.user.Role !== 'Responsable Service'&&value.data.user.Role !== 'Responsable Tache'){
                            setUser({})
                            setAuthenticated('false')
                            window.localStorage.setItem('role', 'declined access')
                            navigate(UNAUTHORIZED_ACCESS)
                        }

                    }
                }

            ).catch(({response} )  => {
            if (response?.data?.message) {
                setLoading(false)
                setAuthenticated('false')
                setError('email', {
                    type: 'manual',
                    message: response.data.message || 'Invalid email or password',
                });
            }
/*
            console.error(response.data.errors);
*/
        })



    };


    useEffect(()=>{
        if (window.localStorage.getItem('AUTHENTICATED') === 'false'){
            navigate(LOGIN_PAGE)
        }
    }, [window.localStorage.getItem('AUTHENTICATED')])

    useEffect(()=>{
        if (window.localStorage.getItem('ROLE') && window.localStorage.getItem('ACCESS_TOKEN') ){
            let role = window.localStorage.getItem('ROLE')
            let previousPage = `/${role}/Dashboard`
            navigate(previousPage)
        }
    }, [])


    return (
        <>
            {/*md:h-auto*/}
            <div className="w-full h-screen flex flex-col md:flex-row p-0 m-0 ">
                <div className=" flex-1 h-full  flex flex-col  items-center text-center  ">
                    {/* Page Title */}
                    <img className="size-64 object-scale-down" src="/src/assets/logo2.png" alt=""/>

                    {/* Page SVG */}
                    <img className="svg max-h-fit " src="/src/assets/log.svg" alt=""/>
                    {/* Bounced Arrow */}
                    <svg className="animate-bounce md:hidden w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
                        </svg>
                    </svg>
                </div>
                <div className="secondSide flex flex-col items-center justify-center lightYellow flex-1 h-full ">
                    <div className="Black font-bold drop-shadow-lg text-3xl  mb-28 ">
                        <span>Welcome Back to TaskFlow !</span>
                    </div>
{/*
--------------------> form start from here :
*/}
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text Black">Email</span>
                                </label>
                                <input placeholder="email" className="input input-bordered"
                                       {...register('email',{
                                           required: true,
                                           pattern: {
                                               value:/^\S+@\S+.\S+$/,
                                               message: "Format invalide"
                                           }
                                       })}
                                />
                                {errors.email && <Alert className="rounded-md mt-1 text-error text-xs" type="error" message={errors.email.message} banner />}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text Black">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered "
                                       {...register('password',
                                           {
                                               required:true
                                           })}/>
{/*                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover Black">Forgot password?</a>
                                </label>*/}
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={loading} type="submit" className="btn butt"  >
                                    {loading && <span className="loading loading-dots loading-md text-gray-400"></span>}
                                    Login
                                </button>
                            </div>
                        </form>
                        <DevTool control={control}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
