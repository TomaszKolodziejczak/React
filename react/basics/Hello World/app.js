// Function Component

const Header = () => {
    return <h1>Hello world!</h1>
}

// class component

class Blog extends React.Component {

    state = {
        number: 0,
    }

    render() {
        return (
            <section>
                <h3>Article</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum minima ut suscipit quas voluptatem modi?</p>
                <p>State: {this.state.number}</p>
            </section>
        )
    }
}

const App = () => {
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

