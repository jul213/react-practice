class hola extends React.Component{
    constructor(props){
        super(props);

        this.state = {in: ""}
    }

    handle(e){
        this.setState({
            in: e.target.value
        })
    }

    render(){
        return (
            <input type="text" value={this.state.in} onChange={(e) => this.handle} />
        )
    }

}
ReactDOM.render(
    <hola />,
    document.getElementById("root")
)



function A(props){
    return <p>A</p>
}

function B(props){
    return <p>B</p>
}

function C(props){
    const show = props.show;
    return show ? <A /> : <B />;
}

ReactDOM.render(
    <C show={false} />,
    document.getElementById("root")
)


const props = {
    name: "juan",
    apellido: "cesar"
}