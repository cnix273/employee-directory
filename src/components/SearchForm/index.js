import React from "react";
import "./style.css";

// Input field to filter the employees array by name
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <h1 className="text-center">Search By Employee Name!</h1>
        <label htmlFor="name">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="name"
          type="text"
          className="form-control"
          placeholder="Type in employee name to begin"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
