import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*  class tutorial */
class Employee extends React.Component{

  render()
  {
      return <div>
        <h1>Employee Infomation</h1>
        <p>Employeen ID : {this.props.Id}</p>
        <p>Employeen Name : {this.props.Name}</p>
        <p>Employeen Gender : {this.props.Gender}</p>
        <p>Employeen Phone : {this.props.Phone}</p>

<Department deptName={this.props.deptName} deptHead={this.props.deptHead}></Department>
      </div>
  }
}


class Department extends React.Component{
render(){

  return <div>
    <h2> Department Details</h2>
    <p>
      <label> Department Name is : {this.props.deptName}</label>
    </p>
    <p>
      <label> Department Head is : {this.props.deptHead}</label>
    </p>
  </div>

}


}

  
  const element=<Employee Id="0002" Name="Akinola Abayomi" Gender="Male" Phone="08067013148" deptName="Software Unit" deptHead="ICT"></Employee>


ReactDOM.render(element,document.getElementById("root"));


/* 
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
 */