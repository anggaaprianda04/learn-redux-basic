import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const loginUser = (data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data)
        .then((res) => {
            // console.log(res.data);
            callback(true, res.data.token)
        })
        .catch((error) => callback(false, error));
}

export const getUsername = (data) => {
    const decodeToken = jwtDecode(data);
    console.log("dapat", decodeToken);
    return decodeToken.user;
} 