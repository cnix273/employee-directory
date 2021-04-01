import React from "react";
import Container from "../../components/Container";
import "./style.css";

function SearchResults(props) {
  return (
    <Container style={{ minHeight: "80%" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Picture</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {props.employees.map((employee) => {
                  return(<tr>
                    <td><img src={employee.picture.medium}></img></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob.date.split("T")[0]}</td>
                  </tr>)
                })} 
              </tbody>
            </table>
        </Container>
  );
}

export default SearchResults;
