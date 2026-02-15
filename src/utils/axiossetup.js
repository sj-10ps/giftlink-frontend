import axios from "axios";
import IP from "./IP";

const api=axios.create({
    baseURL:IP
})

api.interceptors.request.use(req=>{
    const token=localStorage.getItem("token")
    if(token){
        req.headers.Authorization=`Bearer ${token}`
    }
    return req
})

export default api