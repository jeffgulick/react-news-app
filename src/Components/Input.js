import { Component } from "react";

export default class Input extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            author: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value}
            )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchItem({

            text: this.state.text,
            author: this.state.author
        })
        
        this.setState({
            text: "",
            author: ""
        })
    }
    
    render(){
        return(
            <div style={{display:"flex"}}>
                <form onSubmit = {this.handleSubmit}>
                    <label> Key word: 
                        <input 
                            name = "text"
                            placeholder = "search..."
                            value = {this.state.text}
                            onChange = {this.handleChange} />
                    </label>
                </form>
                <form onSubmit = {this.handleSubmit}>
                <label> Author:
                        <input 
                            name = "author" 
                            placeholder = "Author..."
                            value = {this.state.author}
                            onChange = {this.handleChange} />
                    </label>
                </form>
                <button onClick = {this.handleSubmit}>submit</button>
            </div>
        )
    }
}