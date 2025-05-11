import axios from "axios";

const baseURL = "https://password-reset-back-end-cunz.onrender.com/api/v1/users";

const instance = axios.create({
    baseURL,
    timeout : 3000,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    withCredentials : true
})

export default instance;