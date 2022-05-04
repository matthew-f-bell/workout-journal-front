const ExerciseList = (props) => {
    return(
        <>
            {props.exerciseList.map(exercise => {
                    return (
                        <>
                            <p>Exercise: {exercise.name}</p>
                            <p>Sets: {exercise.sets}</p>
                            <p>Reps: {exercise.reps}</p>
                        </>
                    )
                })}
        </>
    )
}

export default ExerciseList