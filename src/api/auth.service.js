import tellWorkoutTo from "./axios.config";
import { useNavigate } from "react-router-dom";

const auth = "/auth";
const users = "/users";


const register = (email, password) => {
    return tellWorkoutTo
        .post(`${auth}/register/`, {email, password})
        .then((res) => {
            console.log(res)
        })
}

const login = (email, password) => {
    try {
        return tellWorkoutTo
            .post(`${auth}/login/`, {email, password})
            .then((res) => {
                console.log(res)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                if(res.data.token) {
                    localStorage.setItem("userToken", JSON.stringify(res.data.token))
                    useNavigate("/workouts")
                }
                useNavigate("/workouts")
                return res.data.token
            })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user")
    console.log(user)
    return JSON.parse(user)
}

const getProfile = () => {
    let user = localStorage.getItem("user")
    return tellWorkoutTo.get(`${users}/${user.id}`)
}

const updateProfile = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user.pk)
    return tellWorkoutTo.post(`${users}/update/${user.pk}`)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {register,login, currentUser, getProfile, updateProfile, logout}