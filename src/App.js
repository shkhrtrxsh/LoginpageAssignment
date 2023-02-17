import logo from './logo.svg';
import './App.css';
import Login from "./components/loginpage"
import Homepage from "./components/homepage"
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const[showProfile, setShowProfile]= useState(false);
  const [username, setUsername]= useState("");
  const [password, setPassword]=useState("");
  return (
    <div>
      <UserContext.Provider value={{username, setUsername, password, setPassword, showProfile, setShowProfile}}>
        {showProfile ? <Homepage/> : <Login/>}
        </UserContext.Provider>
      </div>
  );
}

export default App;
