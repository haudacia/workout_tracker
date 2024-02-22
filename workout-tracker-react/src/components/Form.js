import React from 'react';

export function LogTrainigSession() {
    return (
    <form method="POST">
        <h1>trainnig session log</h1>
        <label for="exercise-name">exercise performed:</label>
        <input type="text" name="exercise-name" id="exercise-name"></input>
        <button type="submit">Submit</button>

        <input type="number" name="exercise-reps" id="exercise-reps"></input>
        <button type="submit">Submit</button>
    </form>
    )

};
