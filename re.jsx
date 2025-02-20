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
}