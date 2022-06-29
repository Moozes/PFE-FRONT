// save token and role

export default function(token, role) {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("role", role);
}