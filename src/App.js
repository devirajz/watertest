import React, { useState, useEffect } from "react";

const waterHeight = 200

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#CCC',
    margin: 50
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  tank: {
    width: 200,
    margin: 'auto',
    height: waterHeight,
    backgroundColor: '#8D36FE',
    borderWidth: 2,
    borderColor: '#ccc'
  },
  madeBy: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  }
}

const App = () => {
  const [level, setlevel] = useState(0);
  const [actionType, setActionType] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (actionType === "increase" && level < 5)
        setlevel(level + 1);
      if (actionType === "decrease" && level > 0)
        setlevel(level - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [actionType, level]);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>Upwork Test Water Level automation</div>

        <button style={styles.button} onClick={() => setActionType("increase")}>
          Increase
        </button>
        <button style={styles.button} onClick={() => setActionType("decrease")}>
          Decrease
        </button>
        <div style={styles.status}>{level * 20} %</div>
        <div style={styles.tank}>
          <div style={{ width: 200, height: waterHeight - 40 * level, backgroundColor: 'white' }}>
          </div>
        </div>
        <div style={styles.madeBy}>
          <a rel="noreferrer" href="https://www.upwork.com/freelancers/senamcharlesdagnon" target="_blank" >
            Made by @Senam
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;