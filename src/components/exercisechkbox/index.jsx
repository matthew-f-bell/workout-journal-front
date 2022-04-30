import React, { useEffect, useState } from 'react'
import * as exerciseService from "../../api/exercise.service"

const ExerciseCheckbox = (props) => {

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
                exercises.map(result => 
                    {
                        return (
                            <div>
                                <input type="checkbox" value={result.name} />{result.name},
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