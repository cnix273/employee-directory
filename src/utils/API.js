import axios from "axios";

const employeeAPI = {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};

export default employeeAPI;
