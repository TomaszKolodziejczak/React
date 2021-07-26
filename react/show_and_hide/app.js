class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }

    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render() {
        const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi, aperiam illo quisquam architecto neque quod ipsum sequi sunt obcaecati iste, ad soluta deleniti accusantium consequatur sint, recusandae rerum. Quibusdam."
        return (
            <>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Hide' : 'Show'}
                </button>
                {this.state.messageIsActive && <h2>{message}</h2>}
            </>
        )
    }
}

ReactDOM.render(<Message />, document.getElementById('root'))
