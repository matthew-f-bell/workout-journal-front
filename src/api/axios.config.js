import axios from "axios";

const DEPLOYMENT = false
let API;

if(DEPLOYMENT) {
    API = "https://workoutjournal-backend.herokuapp.com/api/"
} else {
    API = "http://127.0.0.1:8000/api"
}
//


const tellWorkoutTo = axios.create({
    baseURL: API,
    headers: {
        "content-type": "application/json"
    },
});

export default tellWorkoutTo;