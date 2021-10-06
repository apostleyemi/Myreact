import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* context lesson  */


const employeeContext=React.createContext();

class App extends React.Component
{
  constructor(props){
    super(props);

    this.state={
      Id:101,
      Name:"John Francis",
      Location:"Gbongan",
      Salary:50000000
    };

  }

 render()
 {
   return <div>
     <h1>Wlecome to App class</h1>
     <p>

       <label>Employee ID: <b>{this.state.Id}</b></label>
     </p>
     <employeeContext.Provider value={this.state}>
     <Employee></Employee>
     </employeeContext.Provider>
    
   </div>

 }


}

class Employee extends React.Component
{
  static context=employeeContext;
 render()
 {
   return <div>
     <h1>Employee Details  info</h1>
     <p> 

      <label>Employee ID: <b>{this.context.Id}</b></label>
    </p> 
     <p>

<label>Employee Name: <b>{this.context.Name}</b></label>
</p>  
     <Salary></Salary>
   </div>

 }


}
class Salary extends React.Component
{
  static context=employeeContext;
 render() {
   return <div>
     <h1>Wlecome to Employee Salary Details</h1>
     <p>

       <label>Employee ID: <b>{this.context.Id}</b></label>
    </p> 

     <p>
         <label>Salrary : <b>{this.context.Salary}</b></label> 
     </p> 
    
   </div>

 }


}

const element=<App></App>;

ReactDOM.render(element,document.getElementById("root"));