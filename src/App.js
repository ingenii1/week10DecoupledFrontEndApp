import './App.css';
import { useState } from "react";
import { fetchRequest } from './utils';

const App = () => {
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async (e) => {
      e.preventDefault();
      fetchRequest(setUser, username, email, password);
    }

  return (
    <div>
      <h1>{user ? `Welcome ${user}` : "Please Sign Up"} </h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setUsername(e.target.value)}/>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <input onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
}

export default App;
