import { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <div style={{display:"flex", marginBottom:"20pt"}}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField id="outlined-basic" label="Text" variant="outlined" size = "small"
                        style = {{marginLeft: "5pt"}}
                        name = "text"
                        value = {this.state.text}
                        onChange = {this.handleChange}
                    />
                </form>
                <form onSubmit = {this.handleSubmit}>
                    <TextField id="outlined-basic" label="Author" variant="outlined" size = "small"
                        style = {{marginLeft: "5pt"}}
                        name = "author"
                        value = {this.state.author}
                        onChange = {this.handleChange}
                    />
                </form>
                <Button onClick = {this.handleSubmit} size="small" variant="contained" color="primary" style={{marginLeft:"5pt"}}>Sumbit</Button>
            </div>
        )
    }
}