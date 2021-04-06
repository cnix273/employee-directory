import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";

class Search extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    sorted: false
  };

  // When the component mounts, get a list of all employees and update this.state.employees
  componentDidMount() {
    API.getEmployeeList()
      .then(res => {
          const employees = res.data.results;
          employees.map(employee => {
            employee.dob.date = employee.dob.date.split("T")[0];
            employee.dob.date = employee.dob.date.split("-").reverse().join("-");
            return employee.dob.date;
          })
          this.setState({
            employees: employees,
            filteredEmployees: employees
          })
      })
      .catch(err => console.log(err));
  }
  
  // Setting state to search value
  handleInputChange = event => {
    // Setting target value to searchParam variable
    let searchParam = event.target.value.toLowerCase();
    
    const employees = this.state.employees

    const filteredList = [];
   
    // Filter employees array in state by name based on searchParam
    employees.filter(employee => {
      if (employee.name.first.toLowerCase().search(searchParam) !== -1 || employee.name.last.toLowerCase().search(searchParam) !== -1) 
      {filteredList.push(employee)}
      return filteredList;
    });
   
    // Set employees array in state equal to new filtered list of employees
    this.setState({
      filteredEmployees: filteredList
    });

  };

  // Sort employees array alphabetically
  handleSort = event => {
    event.preventDefault();

    // Get employees and sorted from state
    const sortedEmployees = this.state.filteredEmployees
    let sorted = this.state.sorted;

    // Sorting employees alphabetically
    if (this.state.sorted === false) {
      sortedEmployees.sort((a,b) => {
        let fa = a.name.first.toLowerCase();
        let fb = b.name.first.toLowerCase();
        let la = a.name.last.toLowerCase();
        let lb = b.name.last.toLowerCase();

        // Set sorted state to true
        this.setState({
          sorted: true
        });
        
        // Sorting employees by first name
        if (fa < fb) {
          return -1;
        }

        if (fa > fb) {
          return 1;
        }

        // If employees have the same first name, sort by last name
        if (fa === fb) {
          if (la < lb) {
            return -1;
          }
    
          if (la > lb) {
            return 1;
          }
        }

        return 0;

      })
    }

    // Sorting employees reverse alphabetically
    if (sorted === true) {
      // Sort employees by first name in reverse alphabetical order
      sortedEmployees.sort((a,b) => {
        let fa = a.name.first.toLowerCase();
        let fb = b.name.first.toLowerCase();
        let la = a.name.last.toLowerCase();
        let lb = b.name.last.toLowerCase();

        // Set sorted state to false
        this.setState({
          sorted: false
        });

        // Sorting employees by first name
        if (fa < fb) {
          return 1;
        }

        if (fa > fb) {
          return -1;
        }
        
        // If employees have the same first name, sort by last name
        if (fa === fb) {
          if (la < lb) {
            return 1;
          }
    
          if (la > lb) {
            return -1;
          }
        }

        return 0;

      })
    }

    // Set state with sorted employees
    this.setState({filteredEmployees: sortedEmployees});
  }

  render() {
    return (
      <div>
        <SearchForm
            handleInputChange={this.handleInputChange}
            handleSort={this.handleSort}
            search={this.state.search}
        />
        <SearchResults
            employees={this.state.filteredEmployees}
        />
      </div>
    );
  }
}

export default Search;
