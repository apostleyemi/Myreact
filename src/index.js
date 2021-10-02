import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



/* method two using react  */

/* const element=React.createElement("h1", null,"React Elelment Creation Method two");

ReactDOM.render(element,document.getElementById("root")); */

const element=React.createElement("div",{className:"testClass"},
React.createElement("h1",null,"Welcome to React Tectspace Tutorial"),
React.createElement("P",null,"This tutorial is designed for people who prefer to learn by doing If you prefer learning concepts from the ground up"));

ReactDOM.render(element,document.getElementById("root"));

/* method one jss */

/* const element=<h1 className="testClass">Welcome to React Tutorial by Techspace</h1>;


ReactDOM.render(element,document.getElementById("root"));

const paraElement=<h1 className="testClass">This is the first paragraph in the project , trying to understand multiple element creation</h1>;


ReactDOM.render(paraElement,document.getElementById("para")); */

/* const element=
<div className="testClass">
<h1 >Welcome to React Tutorial by Techspace</h1>
<p>
This tutorial is designed for people who prefer to learn by doing.
 If you prefer learning concepts from the ground up,
 check out our step-by-step guide. You might find this
  tutorial and the guide complementary to each othe
  This tutorial is designed for people who prefer to learn by doing.
 If you prefer learning concepts from the ground up,
 check out our step-by-step guide. You might find this
  tutorial and the guide complementary to each othe
  This tutorial is designed for people who prefer to learn by doing.
 If you prefer learning concepts from the ground up,
 check out our step-by-step guide. You might find this
  tutorial and the guide complementary to each othe
</p>
</div>; */




ReactDOM.render(element,document.getElementById("root"));
