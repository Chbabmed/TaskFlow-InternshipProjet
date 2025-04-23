import axios from "axios";


export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,

});

axiosClient.interceptors.request.use((config)=>{
    const token = window.localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`


    return config
})

axiosClient.interceptors.response.use((response) =>{
    return response
},(error)=>{
    const  {response} = error
    if(response.status === 401){
        window.localStorage.removeItem('ACCESS_TOKEN')

    }
    throw error;
})