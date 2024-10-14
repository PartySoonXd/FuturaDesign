import axios from "axios";

const apiHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "api",
    headers: {
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_API_URL,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,PUT,PATCH,OPTIONS,POST,DELETE", 
        "Access-Control-Max-Age": "86400",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Max-Age",
    }
})

export {
    apiHost
}