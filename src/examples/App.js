import React from "react";
import EmployeesTable from "../lib/components/EmployeesTable";
import data from "../data.js";

// const employeesData = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     birthDate: "1985-03-15",
//     startDate: "2010-08-20",
//     street: "123 Main St",
//     city: "Springfield",
//     state: "CA",
//     zipCode: "98765",
//     department: "Engineering",
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Smith",
//     birthDate: "1990-12-02",
//     startDate: "2015-04-10",
//     street: "456 Elm Ave",
//     city: "Riverside",
//     state: "NY",
//     zipCode: "12345",
//     department: "Marketing",
//   }
// ];

const App = () => {
  const columnsToShow = [
    "firstName",
    "lastName",
    "birthDate",
    "startDate",
    "street",
    "city",
    "state",
    "zipCode",
    "department",
    "result",
  ];
  const columnTitles = [
    "First Name",
    "Last Name",
    "Date of Birth",
    "Start Date",
    "Street",
    "City",
    "State",
    "Zip Code",
    "Department",
    "result",
  ];

  const labelFilterText = "Show:";
  const labelSearchText = "Searchhhh:";

  return (
    <div>
      <EmployeesTable
        data={data}
        columnsToShow={columnsToShow}
        columnTitles={columnTitles}
        labelFilterText={labelFilterText}
        labelSearchText={labelSearchText}
      />
    </div>
  );
};

export default App;
