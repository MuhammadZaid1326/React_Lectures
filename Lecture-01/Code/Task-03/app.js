// Hello world using the React

const heading = React.createElement(
    "h1",
    {},
    "Hello World From the React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);