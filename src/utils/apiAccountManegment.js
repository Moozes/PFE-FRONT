import axiosInstance from "./apiUrl"



export const login = (email, password) => {
  const body = {
    email,
    password
  }

  return axiosInstance.post('users/login', body)
}

export const signup = (name, role, email, password) => {
  const body = {
    name,
    role,
    email,
    password
  }

  return axiosInstance.post('users', body)
}

export const sendResetCode = (email) => {
  const body = {
    email
  }

  return axiosInstance.post('send-reset-code', body)
}

export const resetPassword = (email, code, newPassword) => {
  const body = {
    email,
    code,
    newPassword
  }

  return axiosInstance.post('reset-password', body)
}

export const verify = (email, code) => {
  const body = {
    email,
    code
  }

  return axiosInstance.post('verify', body)
}

export const logout = () => {
  const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
  return axiosInstance.post('users/logout',{}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const logoutAll = () => {
  const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
  return axiosInstance.post('users/logoutAll',{}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const deleteMyAccount = () => {
  const token = sessionStorage.getItem("token")? sessionStorage.getItem("token") : ""
  return axiosInstance.delete('users/me',{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}
