import React from "react";
import EmployeesTable from "../lib/components/EmployeesTable";
// import defaultData from "../defaultData.js";

const App = () => {
  // const dataColumns = [
  //   "firstName",
  //   "lastName",
  //   "birthDate",
  //   "startDate",
  //   "street",
  //   "city",
  //   "state",
  //   "zipCode",
  //   "department"
  // ];
  // const titleColumns = [
  //   "First Name",
  //   "Last Name",
  //   "Date of Birth",
  //   "Start Date",
  //   "Street",
  //   "City",
  //   "State",
  //   "Zip Code",
  //   "Department"
  // ];

  // const labelFilterText = "Show:";
  // const labelSearchText = "Search:";

  return (
    <div>
      <EmployeesTable
        // data={defaultData}
        // dataColumns={dataColumns}
        // titleColumns={titleColumns}
        // labelFilterText={labelFilterText}
        // labelSearchText={labelSearchText}
      />
    </div>
  );
};

export default App;
