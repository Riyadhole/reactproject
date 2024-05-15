import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "../src/App.css";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  state = {
    countryCode: "us",
    category: this.category,
  };

  // Callback function to handle data received from the
  //child component
  countryCodeChange = (childData) => {
    // Update the name in the component's state
    this.setState({ countryCode: childData });
  };
  categoryChange = (childData) => {
    // Update the name in the component's state
    this.setState({ category: childData ? childData : "general" });
  };

  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  render() {
    const { countryCode, category } = this.state;
    return (
      <div>
        <Router>
          {/* <>{window.location.pathname}</> */}
          <Navbar
            onCountryCodeChange={this.countryCodeChange}
            onCategoryChange={this.categoryChange}
          />
          {/* <Navbar /> */}

          <Routes>
            <Route
              exact
              path={"/"}
              element={
                <News
                  apiKey={this.apiKey}
                  key={"general"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path={"/technology"}
              element={
                <News
                  apiKey={this.apiKey}
                  key={"technology"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"technology"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"sports"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"sports"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"business"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"science"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"health"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"health"}
                />
              }
            />

            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"general"}
                  pageDisplayed={6}
                  country={countryCode}
                  category={"general"}
                />
              }
            />
            {console.log("category", category)}
            <Route
              exact
              path={category}
              element={
                <News
                  apiKey={this.apiKey}
                  key={category}
                  pageDisplayed={9}
                  country={countryCode}
                  category={category}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
