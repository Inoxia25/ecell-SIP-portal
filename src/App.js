import logo from "./logo.svg";
import "./App.css";
function InternCard(props){
  return <div class="internship">
  <div class="individual_internship_header">
  <div class="internship_logo">
      <img
        loading="lazy"
        src="/E-cell_White-02.png"
        class="logo company_logo"
      ></img>
    </div>
    <div class="company">
      <div class="profile">
        <a href="" class="profile_name">
        {props.company}
        </a>
      </div>
      <div class="company_name">
        <a class="link_display_like_text" href="">
      
          {props.profile}{" "}
        </a>
      </div>
    </div>
    
  </div>
  <div class="individual_internship_details  individual_internship_internship">
    <div id="location_names">
    <span class="material-icons md-18 md-dark">home</span>

      <span>
        <a class="location_link" href="/">
          Work From Home
        </a>{" "}
      </span>
    </div>
    <div class="internship_other_details_container">
      <div class="other_detail_item_row">
        <div class="other_detail_item ">
          <div class="item_heading">
            <span class="material-icons md-18 md-dark md-icon">timelapse</span>

            <span class="md-dark icon-text">Duration</span>
          </div>
          <div class="item_body">{props.duration} </div>
        </div>
      </div>

      <div class="other_detail_item_row">
        <div class="other_detail_item  stipend_container">
          <div class="item_heading">
            <span class="material-icons  md-18 md-dark md-icon">payments</span>
            <span class="md-dark icon-text"> Stipend </span>
          </div>
          <div class="item_body">
            <span class="stipend">
              <i class="ic-16-currency-inr"></i> {props.stipend}
            </span>{" "}
          </div>
        </div>
        </div>
        <div class="other_detail_item_row">
        <div class="other_detail_item  apply_by">
          <div class="item_heading">
          <span class="material-icons  md-18 md-dark md-icon">
hourglass_bottom
</span>
            <span class="md-dark icon-text">Apply By</span>
          </div>
          <div class="item_body">{props.last_date}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="button_container">
  <div class="tags_container">
                        <div class="label_container label_container_desktop">
            Internship                </div>
                </div>
  <a class="view_detail_button" href="">
            <span class="md-18"> Know More</span>
            <span class="material-icons md-icon">
chevron_right
</span>
        </a>
            </div>
</div>;
}
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
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
<br></br>
    <InternCard profile="Python Development" company="XYZ Company" duration="2 months" stipend="5000/month" last_date="5th June 2021"  />
<br></br>
    </div>
  );
}

export default App;
