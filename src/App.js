import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
const [username, setUsername] = useState("");
const [newStar, setNewStar] = useState({});
const [user_data, setUser_data] = useState({});

// works but late!!
const getUser_data = ()=>{
  console.log('c')
  fetch('http://localhost:3000/user_data/user/haliusm'/*+ username*/)
    .then(result => result.json())
    .then(body => setUser_data(body))
}
//work
const sendNewUser = () => {
  console.log(newUser)
  fetch('http://localhost:3000/user_data/user/' + newUser, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      body: "body"
    }),
  })
} 
//works prefectly
const sendNewStar = () =>{
  console.log('clicked')
  fetch(`http://localhost:3000/user_data/haliusm/star/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newUser,
      type:"art",
      url: "someurl.com",
    }),
  })

  
}



return (
  <div className="App">
    <h1>haliusm</h1>
    <input type={'text'} onChange={(e)=> {setNewUser(e.target.value)
    setUsername(e.target.value)}} />
    <button onClick={sendNewUser}>send new user</button>
    <button onClick={sendNewStar}>send my data</button>
    <button onClick={getUser_data}>get my data</button>
    <ul>
      <li>type: {user_data.type}</li>
      <li>url: {user_data.url} </li>
    </ul>

  </div>
);
}

export default App;
