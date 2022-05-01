import React, { useEffect, useState } from 'react'
import * as exerciseService from "../../api/exercise.service"

const ExerciseCheckbox = () => {

    const [exercises, setExercises] = useState([]);

    const getExercise = async () => {
        await exerciseService.getAll().then((res) => {
            setExercises(res.data)
        })
    }
    useEffect(() => {
        getExercise()
    }, [])

    return (
        <div>
            {
                exercises.map(exercise => 
                    {
                        return (
                            <div>
                                <input type="checkbox" value={exercise.name} />{exercise.name},
                                <label htmlFor="reps"> Number of reps:</label>
                                <input type="number" name="reps"/>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ExerciseCheckbox;