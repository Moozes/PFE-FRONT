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

export const getPublishedLesions = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.get('lesions/published', {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}

export const deleteLesion = (id) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.delete(`lesions/${id}`, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}

export const updatePublishLesion = (id, published) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.patch(`lesions/${id}`, {
        published
    }, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}



export const comment = (id, comment) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.post(`lesions/${id}/comments`, {
        text: comment
    }, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}