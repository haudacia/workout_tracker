export function ListGroup() {
    let exercisesList = [
      "leg press 45",
      "squat",
      "bulgarian split squat",
      "unilateral deadlift",
      "abduction",
      "adduction",
      "cable kickback",
      "roman chair back extension",
      "unilateral dumbbell row",
      "chest-supported dumbbell row",
      "pulldowns",
    ];
    return (
        <div>
            <h1>List of exercises</h1>
            <ul>
                {exercisesList.map((item, index) => (
                    <li key={item}>
                        {index} - {item}
                    </li>
                )
                )}
            </ul>
        </div>
    )
};

export function Greeting() {
    return <p>Hi!</p>
}
