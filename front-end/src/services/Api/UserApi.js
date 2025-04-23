import {axiosClient} from "../../API/axiosAPI.jsx";


const UserApi = {

    getCsrfToken : async() =>{
        return await axiosClient.get('/sanctum/csrf-cookie');
    },
    login: async (email, password) =>{
        return await axiosClient.post('/login', {email, password})
    },
/*    getUser: async (token) => {
        return await axiosClient.get('/user', {
            headers:{
                'Authorization' : `Bearer ${token}`
            }
        })
    },*/
    getUser: async () => {
        return await axiosClient.get('/user')
    },
    userlogout: async ()=>{
        await axiosClient.post('/logout',)
    }

}

export default UserApi;