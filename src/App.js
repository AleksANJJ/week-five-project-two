import './App.css';
import { useState } from "react";
import { data } from "./Data";


function App() {
  
  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];

  const previousPerson = () => {
    setPerson((person => {
      person --;
      if(person < 0) {
        return data.length-1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person => {
      person ++;
      if(person > data.length-1) {
        person = 0;
      }
      return person;
    }))
  }

  return(
    <div>
      <div className='container'>
        <img src={image} width="200px" alt='foto'/>
      </div>
      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>
      <div className='container'>
        <h2>{description}</h2>
      </div>
      <div className='container'>
        <h3>{age} years old</h3>
      </div>
      <div className="btn container">
        <button onClick={previousPerson}>PREVIOUS</button>
        <button onClick={nextPerson}>NEXT</button>
      </div>
    </div>
  )
}

export default App;
