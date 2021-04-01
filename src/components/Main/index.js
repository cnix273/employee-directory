import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    error: ""
  };

  // When the component mounts, get a list of all employees and update this.state.employees
  componentDidMount() {
    API.getEmployeeList()
      .then(res => {
          this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
  }
  
  // Setting state to search value
  handleInputChange = event => {
    // Setting target value to searchParam variable
    let searchParam = event.target.value;
    // Creating variable to set capitalized searchParam equal to
    let searchParamCapital = "";

    // Function to capitalize first letter of search value
    function capitalize(searchParam) {
      searchParamCapital = searchParam.charAt(0).toUpperCase() + searchParam.slice(1);
    }

    capitalize(searchParam)

    // Setting state to capitalized search value
    this.setState({ search: searchParamCapital });
  };

  // Filtering employees array by name
  handleFormSubmit = event => {
    event.preventDefault();

    // Get search value from state
    const searchParam = this.state.search;
   
    // Filter employees array in state by name based on searchParam
    const filteredList = this.state.employees.filter(employee => employee.name.first === searchParam || employee.name.last === searchParam);
   
    // Set employees array in state equal to new filtered list of employees
    this.setState({employees: filteredList});
  }

  render() {
    return (
      <div>
        <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
        />
        <SearchResults
            employees={this.state.employees}
        />
      </div>
    );
  }
}

export default Search;
