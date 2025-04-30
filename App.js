
{/* <div id="perent">
    <div id="child">
        <h1>I a'm h1 tag</h1>
        <h2>I a'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I a'm h1 tag</h1>
        <h2>I a'm h2 tag</h2>
    </div>
</div> */}

// ReactElement(object) => HTML (Browser Understand)

const perent = React.createElement(
    "div", {id: "perent"},
    [React.createElement(
        "div", {id: "child"},
        [React.createElement("h1", {}, "I a'm h1 tag"),
        React.createElement("h2", {}, "I a'm h2 tag")
    ]),
    React.createElement(
        "div", {id: "child2"},
        [React.createElement("h1", {}, "I a'm h1 tag"),
        React.createElement("h2", {}, "I a'm h2 tag")
    ]),

])

console.log(perent)  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(perent);