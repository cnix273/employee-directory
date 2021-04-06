import React from "react";
import Container from "../../components/Container";
import "./style.css";

function SearchResults(props) {
  return (
    <Container style={{ minHeight: "80%" }} className="container">
      <div className="searchResults">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="header">Picture</th>
              <th scope="col" className="header">Name</th>
              <th scope="col" className="header">Email</th>
              <th scope="col" className="header">Phone Number</th>
              <th scope="col" className="header">DOB</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => {
              return(<tr>
                <td><img alt={employee.name.first} src={employee.picture.medium}></img></td>
                <td className="name">{employee.name.first} {employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob.date}</td>
              </tr>)
            })} 
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default SearchResults;
