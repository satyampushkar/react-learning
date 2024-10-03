import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div", 
//     { id: "parent"},
//     React.createElement(
//         "div", 
//         { id: "child"},
//         [React.createElement("h1", {}, "Hello from h1 React!!"), React.createElement("h2", {}, "Hello from h2 React!!")]
//         )
//     );

const parent = React.createElement(
    "div", 
    { id: "parent"},
    [
        React.createElement(
            "div", 
            { id: "child"},
            [React.createElement("h1", {}, "Hello from h1 React!!"), React.createElement("h2", {}, "Hello from h2 React!!")]
            ),
            React.createElement(
                "div", 
                { id: "child"},
                [React.createElement("h1", {}, "Hello from h1 React!!"), React.createElement("h2", {}, "Hello from h2 React!!")]
                )
    ]
    );

// parent is just an object (have props) "Hello from React!!"
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);