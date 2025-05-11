import axios from "axios";

const baseURL = "http://127.0.0.1:3001/api/v1/users";

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