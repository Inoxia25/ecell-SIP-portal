import logo from "./logo.svg";
import "./App.css";
import InternCard from "./InternCard.js";
function App() {
  return (
    <div>
    <header class="navbar">
    <div class="">
      <a href="/">
      <img src="/E-cell_White-02.png" class="logo" alt="Ecell_Image"></img>
      </a>
      </div>
      <div>
      <span>  </span>
      </div>
    </header>
    <div>
     <h1 class="heading">Internship Portal</h1>
    </div>
    <br></br><br></br>
    <div class="internships"> 
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
</div>
    </div>
  );
}

export default App;
