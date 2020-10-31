import React from "react";
import './table.css'
const data = require("./data");

const Table = () => {
  const dataImport = data[0];
  const dataImport1 = data[1];
  const dataImport2 = data[2];

  

  function row1() {
    let rowcell = [];
    let res = Object.values(dataImport);

    res.map((x, i) => {
       
        Object.values(res[i]).map(y => {
          rowcell.push(<td>{y}</td>);
          return rowcell;
        });
      
      return rowcell;
    });

    return rowcell;
  }


   function row2() {
    let rowcell2 = [];
    let res = Object.values(dataImport1);

    res.map((x, i) => {
       
        Object.values(res[i]).map(y => {
          rowcell2.push(<td>{y}</td>);
          return rowcell2;
        });
      
      return rowcell2;
    });

    return rowcell2;
  }
   function row3() {
    let rowcell3 = [];
    let res = Object.values(dataImport2);

    res.map((x, i) => {
       
        Object.values(res[i]).map(y => {
          rowcell3.push(<td>{y}</td>);
          return rowcell3;
        });
      
      return rowcell3;
    });

    return rowcell3;
  }

  

  return (
    <React.Fragment>
      <h1>Everlytics assignment 2</h1>
       <table>
        <thead>
          <tr>{row1()}</tr>
        </thead>
        <tbody>
          <tr>{row2()}</tr>
          <tr>{row3()}</tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
