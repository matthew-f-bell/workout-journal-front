import axios from "axios";

//const API = "http://127.0.0.1:8000/api"
const API = "https://workoutjournal-backend.herokuapp.com/api/"

const tellWorkoutTo = axios.create({
    baseURL: API,
    headers: {
        "content-type": "application/json"
    },
});

export default tellWorkoutTo;