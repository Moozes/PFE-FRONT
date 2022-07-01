import axiosInstance from "./apiUrl"

export const uploadLesion = (formdata) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.post('lesions', formdata, {
        headers: { 
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}` 
        },
    })
}

export const getLesions = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get('lesions', {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}