import React, { useState } from "react";
import { WorkoutDataService } from "../../api/workout.service";


const CreateWorkout = () => {
    const [name, setName] = useState("");
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    return (
        <>
            <h2>Create Workout</h2>
            <form action="post">
                <label htmlFor="name">Name</label>
                <input
                        type="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                />

                <label htmlFor="exercises">Exercises</label>
                <input 
                        type="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="name"
                />

                <label htmlFor="sets">Number of Sets</label>
                <input type="text" name="sets"/>

                <input type="submit" value="Create"/>
                <button>Cancel</button>
            </form>
        </>
    )
}

export default CreateWorkout;