import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.body.style.backgroundColor = "rgb(24, 27, 31)";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" theme={theme} handleTheme={handleTheme} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About theme={theme} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} theme={theme} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
