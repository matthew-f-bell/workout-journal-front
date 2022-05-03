import tellWorkoutTo from "./axios.config";

const workouts = "/workouts";



const getAll = () => {
    return tellWorkoutTo.get(`${workouts}/`);
};

const get = (id) => {
    return tellWorkoutTo.get(`${workouts}/${id}/`);
};

const create = (data) => {
    return tellWorkoutTo.post(`${workouts}/`, data);
};

const update = (id, data) => {
    return tellWorkoutTo.put(`${workouts}/${id}/`, data);
};

const destroy = (id) => {
    return tellWorkoutTo.delete(`${workouts}/${id}/`);
};

const getUserWorkouts = (userID) => {
    return tellWorkoutTo.get(`${workouts}/profile/${userID}/`)
}

export { getAll, get, create, update, destroy, getUserWorkouts };