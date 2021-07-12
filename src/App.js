import { useState } from "react";
import "./App.css";

function App() {
  const date = new Date().toLocaleString();
  const [curDate, setCurDate] = useState();
  const [lastDigit, setLastDigit] = useState();
  const [styles, setStyle] = useState();
  const date1 = new Date();
  console.log(date1);
  const showDate = () => {
    setCurDate(new Date());
    let sec = new Date().getSeconds();
    setLastDigit(sec);
    if (sec % 2 === 0) setStyle({ backgroundColor: "black", color: "white" });
    else setStyle({ backgroundColor: "white" });
  };

  setTimeout(showDate, 1000);

  return (
    <div className="App" style={styles}>
      <div className="show-date">{date}</div>
    </div>
  );
}

export default App;
