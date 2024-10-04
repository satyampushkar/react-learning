import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = <h1 id="heading" className="head" >Hello from JSX 1</h1>;

const jsxHeading2 = (
    <h1 id="heading" className="head" >
        Hello from JSX 2 {jsxHeading}
    </h1>
    );
const number = 100;
// React Component - Class based & Functional

// Class based component - OLD

// Functional Component - NEW
const HeadingComponent = () =>{
    return <h1>Namaste from Functional Component1</h1>
}
//the above is same as below
const HeadingComponent2 = () => (
    <div>
        <HeadingComponent />
        <h1>Namaste from Functional Component2</h1>
        {number + 200}
        {jsxHeading2}
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);
root.render(<HeadingComponent2 />);