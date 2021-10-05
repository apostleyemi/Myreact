import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CountCharacters extends React.Component{
 constructor(props)
 {
   super(props);
   this.state={
     message:'',
     counter:10
   };
 }
 onMessageChange(text)
 {
     this.setState({
         message:'message has  '+ text.length+ '  number of characters',
        
       });
 }
render()
{
   return <div>

     <h1>Welcome to Character Counter </h1>

     <p>
       <label>Enter Text Here : <input type="text" onChange={
         e=>this.onMessageChange(e.target.value)
       } ></input></label>
     </p>
     <p>
       <label>{this.state.message}</label>
     </p>
     <p>
       <label>{this.state.counter}</label>
     </p>
   </div>
}



}
class Employee extends React.Component{
  state={counter:0};
    addEmployee=()=>{
      this.setState({counter:this.state.counter+1})
     /*  this.counter=this.counter+1; */
        /*  alert("Praise God Employee Exists");
         alert("you have clicked "+this.counter+"times"); */
    }

 render(){
        return <div>
           <h1>Manage Employee</h1>
           <p>
             <button onClick={this.addEmployee}  >Add Employee</button>
           </p>
           <p>
             <label>Employee button in clicked<b>{this.state.counter}</b> times</label>
           </p>

        </div>
      }

}

const element=<CountCharacters></CountCharacters>
ReactDOM.render(element,document.getElementById("root"));

