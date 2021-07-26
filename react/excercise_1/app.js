class App extends React.Component {
    state = {}

    handleInputChange(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.handleInputChange} type="text" />
                <button>Reset</button>
                <h1 className="title"></h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
