import axiosInstance from "./apiUrl"

export const getMessages = (id) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get(`messages/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}

export const sendMessage = (id, text) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.post(`messages/${id}`, {
        text
    }, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}


export const getUsersThatMessagedMe = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get('/messages', {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
}