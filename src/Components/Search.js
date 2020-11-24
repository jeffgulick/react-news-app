import { Component } from "react";

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text
        })
        this.setState({
            text: ""
        })
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label> Search: 
                        <input 
                            name = "text"
                            placeholder = "search..."
                            value = {this.state.text}
                            onChange = {this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}