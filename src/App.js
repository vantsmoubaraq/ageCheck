import './App.css';
import { useState } from 'react';
import myImage from "./icons8-age-48.png";

function App() {
  const [DOB, setDOB] = useState("");
  const [age, setAge] = useState({
    ageInYears: "",
    ageInMonths: "",
    ageInDays: "",

  })
  
  const handleChange = (e) => {
    const {value} = e.target;
    setDOB(value);
    console.log(DOB);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const DOBobj = new Date(DOB);
    const ageInMilliSeconds = today - DOBobj;

    if (DOB === ""){
      alert("Enter your date of birth!");
      return;
    }
    
    if (ageInMilliSeconds < 0){
      alert("You can not be born in future");
      return;
    }

    // Calculate the number of milliseconds in a year, month, and day
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Approximation for an average year
    const millisecondsPerMonth = millisecondsPerYear / 12; // Approximation for an average month
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    // Calculate the age in years, months, and days
    const ageInYears = Math.floor(ageInMilliSeconds / millisecondsPerYear);
    const ageInMonths = Math.floor((ageInMilliSeconds % millisecondsPerYear) / millisecondsPerMonth);
    const ageInDays = Math.floor((ageInMilliSeconds % millisecondsPerMonth) / millisecondsPerDay);

    setAge(age => { return {...age, ageInYears: ageInYears, ageInMonths: ageInMonths, ageInDays:ageInDays}});
  }

  const DisplayAge = (props) => {
    return (
      <div id="disp">
       <div class="years">
          {props.input.ageInYears !== ""? <p class="label">{props.input.ageInYears}</p>: <p class="label">_</p>}
          <p class="marker">Years</p>
        </div>
        <div class="years">
          {props.input.ageInMonths !== ""? <p class="label">{props.input.ageInMonths}</p>: <p class="label">_</p>}
          <p class="marker">Months</p>
        </div>
        <div class="years">
          {props.input.ageInDays !== ""? <p class="label">{props.input.ageInDays}</p>: <p class="label">_</p>}
          <p class="marker">Days</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <header>
        <img src={myImage} alt="title"/>
        <p id="check">AgeCheck</p>
      </header>
      <div id="card">
      <img src={myImage} alt="title"/>
        <form onSubmit={handleSubmit}  id="form">
          <input type='date' name='DOB' value={DOB} onChange={handleChange} id="DOB"/>
          <input type='submit' value="Calculate" id="calculate"/>
        </form>
        <DisplayAge input={age}/>
      </div>
      <footer>
        <p>Developed by Mubarak Wantimba</p>
        <a href='https://www.github.com/vantsmoubaraq'><img src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="github" class="git"/></a>
        <a href='https://www.linkedin.com/in/mubarak-wantimba-3025a820a/'><img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="linkedin" class="git"/></a>
      </footer>
    </div>
  );
}

export default App;
