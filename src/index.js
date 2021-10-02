import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var  DisplayEmployeeInfo=(employee)=>
{ return <div>
  <h1>Employee Information</h1>
      <p>
      <label>  Employee ID: <b>{employee.Id}</b></label>
      </p>

      <p>
      <label>  Employee Name: <b>{employee.Name}</b></label>
      </p>

        <p>
        <label>  Employee Gender: <b>{employee.gender}</b></label>
        </p>

        <p>
        <label>  Employee Phone: <b>{employee.Phone}</b></label>
        </p>
        <Department deptName={employee.deptName} headName={employee.headName}></Department>
       </div>;

      
}

const Department=(deptInfo)=>{
  return <div><p>Dept Name is: <b>{deptInfo.deptName}</b></p>
  <p>Dept Head is: <b>{deptInfo.headName}</b></p>

  </div>
}
const element=<DisplayEmployeeInfo Id="0001" Name="Joy Apata" gender="Male" Phone="08067013148" deptName="Software Unit"
 headName="ICT"></DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById("root"));
