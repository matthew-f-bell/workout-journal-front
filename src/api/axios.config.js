import axios from "axios";

//API = "http://127.0.0.1:8000/api"
API = REACT_APP_API_URL

const tellWorkoutTo = axios.create({
    baseURL: API,
    headers: {
        "content-type": "application/json"
    },
});

export default tellWorkoutTo;