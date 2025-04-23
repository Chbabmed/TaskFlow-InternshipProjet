import {createContext, useContext, useEffect, useState} from "react";
import UserApi from "../services/Api/UserApi.js";
import {useNavigate} from "react-router-dom";
import userApi from "../services/Api/UserApi.js";

export const UserStateContext = createContext({
    user : {},
    setUser :()=>{},
    authenticated : window.localStorage.getItem('AUTHENTICATED') ,
    setAuthenticated: ()=>{},
    logout : ()=>{},
    login : (email, password)=>{},
    setToken : (token)=>{},

    })
export default function UserContext({children}){

    const [myUser, _setUser] = useState(window.localStorage.getItem('my'))
    const [authenticated, _setAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED') );
    const [token, _setToken] = useState(null)

    const login = async (email,password)=>{
/*
        await userApi.getCsrfToken()
*/
        return await  UserApi.login(email,password)
    }

    const logout = async () => {
        try {
            await UserApi.userlogout();
            setUser({});
            window.localStorage.removeItem('AUTHENTICATED');
            window.localStorage.removeItem('ROLE');
            window.localStorage.removeItem('ACCESS_TOKEN');
            window.localStorage.removeItem('CURRENT_USER');
            console.log('logout success from front');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };




    const setToken = (userToken) => {
        _setToken(userToken);
        window.localStorage.setItem('token', userToken);
    };


    const setUser = (value)=>{
        _setUser(value)
        console.log('from cntx',value)
    }



    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
    }




    return(
        <>
            <UserStateContext.Provider value={{
                user : myUser,
                setUser,
                authenticated,
                setAuthenticated,
                logout,
                login,
                setToken
            }}>
                {children}
            </UserStateContext.Provider>
        </>
    )
}

export const useUserContext = ()=> useContext(UserStateContext)