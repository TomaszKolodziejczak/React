class App extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         text: ""
    //     }
    // }

    state = {
        text: "",
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)

        this.setState({
            text: this.state.text += number
        })

    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>Add number</button>
                <ResultPanel text={this.state.text} />
            </>
        )
    }
}

const ResultPanel = (props) => {
    return <h1>{props.text}</h1>
}

ReactDOM.render(<App />, document.getElementById('root'))