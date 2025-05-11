import instance from "./instance";

const userServices = {
    register: async (userData) => {
        return await instance.post("", userData);
    },
    forgot: async (userData) => {
        return await instance.post("/forgot-password", userData);
    }
}

export default userServices;