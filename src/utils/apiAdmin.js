import axiosInstance from "./apiUrl"

export const verifyDoctor = (id) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""

    return axiosInstance.post(`users/${id}/verifyDoctor`, {}, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    })
}