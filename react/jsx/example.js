console.log(React);
console.log(ReactDOM);


const element = <div>React element</div>

const element2 = React.createElement(
    "div",
    null,
    "React manually"
)

const element3 = (
    <div>
        <p>text</p>
    </div>
)

const element4 = (
    <React.Fragment>
        <section></section>
        <section></section>
    </React.Fragment>
)

const element5 = (
    <>
        <section></section>
        <section></section>
    </>
)

