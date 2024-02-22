const Home = () => {
  const handleClick = () => {
    return ("Hello");
}

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>click</button>
        </div>
    );
}

export default Home;
