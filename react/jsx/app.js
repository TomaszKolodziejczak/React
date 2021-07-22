const header = <h1 className="title">Welcome!</h1>

const classBig = "big";
const handleClick = () => alert("clicked!")
const text = "Me by mail"

const main = (
    <div>
        <h1 className="red">First article</h1>
        <p onClick={handleClick}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto tempore repudiandae blanditiis voluptate unde enim atque suscipit quibusdam amet voluptatum voluptas accusamus, magni illum veritatis porro molestiae odit aut laudantium.</p>
    </div>
)
const footer =
    <footer>
        <p className={classBig}>
            Contact {text}
        </p>
    </footer>

const elements = [header, main, footer]

ReactDOM.render(elements, document.getElementById('root'))
