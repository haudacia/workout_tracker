import React from 'react';

const logButton = document.getElementById("log-workout");
const dialog = document.getElementById("exercise-dialog");
const cancelButton = document.getElementById("cancel");
//const dialog2 = document.getElementById("reps-weights-dialog");
const nextButton = document.getElementById("next");

//dialog.returnValue = "favAnimal";


// Update button opens a modal dialog
logButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

// Form cancel button closes the dialog box
cancelButton.addEventListener("click", () => {
  dialog.close("notChosen");
  openCheck(dialog);
});

/*nextButton.addEventListener("click", ()=> {
    dialog2.showModal();
    openCheck(dialog2);
  });
  */

export function LogTrainigSession() {
    return (
        (
        <div>
        <button type="submit" id="log-workout">log workout session</button>
      </div>
        ),


      <dialog id="exercise-dialog">
        <form method="dialog">
          <h1>trainnig session log</h1>
          <label for="exercise-name">exercise performed:</label>
          <input type="text" name="exercise-name" id="exercise-name"></input>
          <button type="submit">Submit</button>

          <input type="number" name="exercise-reps" id="exercise-reps"></input>
          <div>
            <button id="cancel" type="reset">cancel</button>
            <button id="next" type="submit">next</button>
          </div>
        </form>
      </dialog>
       
    )

};


function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
};

/* <!DOCTYPE html>
<html>
    <head>
        <title>workout tracker</title>
        <link rel="stylesheet" href="style.css" type="text/css"/>
    </head>
    <body>
        <h1>workout tracker</h1>
        
        <nav>
            <button id="logWorkout">log workout session</button>
            <a href="./workout-plan-table.html" target="_blank"><button>workout split</button></a>
        </nav>
        <!-- pop-up dialog box, containing a form -->
        <dialog id="exerciseDialog">
            <form method="dialog">
                <p>
                    <label for="exercisePerformed">exercise performed:</label>
                    <select id="exercisePerformed" name="exercisePerformed">
                        <option></option>
                        <option>leg press 45</option>
                        <option>squat</option>
                        <option>sumo squat</option>
                        <option>bulgarian split squat</option>
                        <option>hip thrust</option>
                        <option>single leg deadlift</option>
                        <option>leg extension</option>
                    </select>
                </p>
            <div>
                <button id="cancel" type="reset">cancel</button>
                <button id="next" type="submit">next</button>
            </div>
            </form>
        </dialog>

        <dialog id="repsAndWeightsDialog">
            <form method="dialog">
                <p>
                    <input type="number" id="reps">Repetitions performed</input>
                    <input type="number" id="sets">Weightload in kg</input>
                </p>
            <div>
                <button id="cancel" type="reset">cancel</button>
                <button id="next set" type="submit">next</button>
                <button id="next exercise" type="submit">next</button>
                <!-- show a title in each new dialog box wqith the respective set count: Set 1 - Leg Press 45...
                Set 4 - Bulgarian split squat, etc. (counting loop WHILE user is stil performing given exercise.) -->
            </div>
            </form>
        </dialog>
<!-- After the first set of each exercise, there will be
    two options for the user: continue logging more sets (loop 1: reps + weightload for each one)
    for the current exercise OR inform the current exercise is finished to start 
    logging in data about the next one (loop 2). Loop 3 refers to the whole session altogether, ending
    with a specific button of submit data to be stored in the database. -->

    </body>
    <script src="script.js"></script>
</html> */