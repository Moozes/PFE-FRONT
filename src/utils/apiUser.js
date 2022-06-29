import axiosInstance from "./apiUrl"

export const uploadAvatar = (formdata) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.post('users/me/avatar', formdata, {
        headers: { 
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}` 
        },
    })
}


export const deleteAvatar = () => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.delete('users/me/avatar',{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
}


export const updateProfile = (data) => {
    const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
    return axiosInstance.patch('users/me', data, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    })
}