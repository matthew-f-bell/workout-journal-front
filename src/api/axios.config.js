import axios from "axios";

<<<<<<< HEAD
const API = "http://127.0.0.1:8000/api"
//const API = "https://workoutjournal-backend.herokuapp.com/api/"
=======
const DEPLOYMENT = false
let API;

if(DEPLOYMENT) {
    API = "https://workoutjournal-backend.herokuapp.com/api/"
} else {
    API = "http://127.0.0.1:8000/api"
}
//

>>>>>>> 6a64c047aa7ed5aa76bbe6f8cc8e2cd3e6afd157

const tellWorkoutTo = axios.create({
    baseURL: API,
    headers: {
        "content-type": "application/json"
    },
});

export default tellWorkoutTo;