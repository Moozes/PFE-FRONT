import axiosInstance from "./apiUrl"

export const verifyDoctor = (id) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""

    return axiosInstance.post(`users/${id}/verifyDoctor`, {}, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    })
}


export const getAllUsers = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get('users', {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    })
}

// get all lesions without the personel information
export const getAllLesions = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get('allLesions', {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    })
}

export const deleteUser = (id) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.delete(`users/${id}`, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    })
}