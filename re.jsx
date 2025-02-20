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