

const reactheading = React.createElement("h1", { id: "heading", abc: "xyz"}, "Hello from React!!");

// reactheading is just an object (have props)
console.log(reactheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactheading);