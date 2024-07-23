import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import { useState } from 'react';
import Alert from './component/Alert';

function App() {
  const [darkmode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // using this function can show the alert function then change the state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const togglemode = () => {
    if (darkmode === "light") {
      setDarkMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been changed", "success")
    }
    else if (darkmode === "dark") {
      setDarkMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been changed", "success")
    }
  }
  return (
    <>
      <Navbar title={"TextUtils"} home={"Home"} about={"About"} mode={darkmode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textarea heading={"Enter Your Some Text"} mode={darkmode} alert={showAlert} />
      </div>
    </>
  );
}

export default App;
