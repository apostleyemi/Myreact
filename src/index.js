import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Employee extends React.Component
{

 constructor(props)
 {
   super(props);
   this.state={

    updateSalary:null
   };
 }
 getUpdatedSalary=(salary)=>{
   this.setState({updateSalary:salary});

 }
 render(){

       return <div>
         <h1>Employee Details </h1>
        <p>
          <label>ID :<b>{this.props.Id}</b></label>
        </p>
        <p>
          <label>Name :<b>{this.props.Name}</b></label>
        </p>
        <p>
          <label>Gender :<b>{this.props.Gender}</b></label>
        </p>
        <p>
          <label>Location :<b>{this.props.Location}</b></label>
        </p>
        <p>
          <label>Salary :<b>{this.props.Salary}</b></label>
        </p>
        <p>
          <label>Updated Total Salary :<b>{this.state.updateSalary}</b></label>
        </p>
        <Salary BasicSalary={this.props.BasicSalary}  HRA={this.props.HRA} 
        SpecialAllowance={this.props.SpecialAllowance} onSalaryChange={this.getUpdatedSalary} ></Salary>


       </div>
 }



}

class Salary extends React.Component
{
  constructor(props){
   super(props);
   this.basic=React.createRef();
   this.hrs=React.createRef();
   this.sa=React.createRef();

   this.state={
     basic:this.props.BasicSalary,
     hrs:this.props.HRA,
     sa:this.props.SpecialAllowance
   };
  }

  updateSalary=()=>{
    let salary=parseInt(this.basic.current.value)+ parseInt(this.hrs.current.value)
    +parseInt(this.sa.current.value);
    this.props.onSalaryChange(salary);

  }
 render()
 {
   return <div>

            <h1> Salary Details </h1>
            <p>
              <label>Basic Salary : <input type="text" ref={this.basic} defaultValue={this.state.basic}></input></label>
            </p>
            <p>
              <label>HRA : <input type="text" ref={this.hrs} defaultValue={this.state.hrs}></input></label>
            </p>
            <p>
              <label>Special Allowance  : <input type="text" ref={this.sa} defaultValue={this.state.sa}></input></label>
            </p>
            <button onClick={this.updateSalary}>Update</button>
   </div>
 }

}

const element=<Employee Id="P005" Name="John Doe" Gender="Male"
 Location="Lagos" Salary="200000" BasicSalary="100000" HRA="5000" SpecialAllowance="20000"></Employee>

 ReactDOM.render(element,document.getElementById("root")); 