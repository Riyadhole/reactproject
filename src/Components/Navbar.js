import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  constructor() {
     super();
     this.state = {
       selectedCountry: "us",
     };
   }
  render() {

    
/* country on change in search box*/
    // this.onChange = (event) => {
    //   // Call the parent callback function
    //   // this.value1 = document.querySelector("#searchvalue").value;
    //   this.value1 = event.target.value;
    //   this.props.parentCallback(this.value1);

    // };  



   //dropdown country
    const countryCodes = ["in", "us", "jp","au", 'br', 'pk', 'en', 'cn'];

    const handleCountrySelect = (e) => {
      this.setState({ selectedCountry: e.target.value });
      console.log('this.state.selectedCountry', this.state.selectedCountry)
      this.props.onCountryCodeChange(e.target.value);
    };
    const handleCategoryChange = (category) => {
      // this.category = e.target.value
   
      this.props.onCategoryChange(category);

      // this.setState({ selectedCountry: e.target.value });
     
    };
    // this.onclick=(event)=>{
    //   this.value1 = document.querySelector("#countrycode").value;
    // }

    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                    onClick={(e) => handleCategoryChange('sports')}
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                    onClick={(e) => handleCategoryChange('business')}
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/technology"}
                    onClick={(e) => handleCategoryChange('technology')}
                  >
                    technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                    onClick={(e) => handleCategoryChange('health')}
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"  onClick={(e) => handleCategoryChange('science')}
                  >
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                    onClick={(e) => handleCategoryChange('general')}
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  id="searchvalue"
                  onChange={this.onChange}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link className="nav-link" to={this.value1}>
                  <button
                    className="btn btn-outline-success"
                    // onChange={this.onChange}
                    type="submit"
                  >
                    Search
                  </button>
                </Link>
              </form> */}
            </div>
          </div>

          <div className="container d-flex justify-content-end my-2 mx-2" style={{width:"auto"}}>
            <div className="container">
              <select
            className="container btn-sm btn-primary "
            style={{width:"60px"}}
              name="Countries"
              onChange={(e) => handleCountrySelect(e)}
              value={this.state.selectedCountry}
            >
        
              {countryCodes.map((country, key) => (
                <option key={key} value={country}>
              
                {country}
               
                </option>
              ))}
            </select></div>
            
            {/* <div className="container" > <Link className=" btn btn-sm btn-primary navbar-brand" to={this.countryVal}>
                Go 
            </Link> </div> */}
           
       
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
