


const LogSession = () => {
  const handleClick = () => {
    return (
      <dialog id="exercise-dialog">
        <form method="dialog">
          <label for="exercise-name">exercise performed:</label>
          <input type="text" name="exercise-name" id="exercise-name"></input>
          <button type="submit">Submit</button>

          <input type="number" name="exercise-reps" id="exercise-reps"></input>
          <div>
            <button id="cancel" type="reset">
              cancel
            </button>
            <button id="next" type="submit">
              next
            </button>
          </div>
        </form>
      </dialog>
    );
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick} type="submit" id="log-workout">
        log workout session
      </button>
    </div>
  );
};

export default LogSession;
