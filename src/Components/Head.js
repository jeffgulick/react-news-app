import { Component } from "react";
import Input from './Input'
import Body from './Body'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

export default class Head extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stories: [""],
            isFetching: false
        }
    }
    searchItem = (item) => {
        this.setState({
            stories: [],
            isFetching: true
        })

        let topic = item.text
        let author = item.author
        let url = ''

        if(topic && author){
            url = `https://hn.algolia.com/api/v1/search?query=${topic}&tags=story,author_${author}`
        }
        else if(topic) {
            url = `http://hn.algolia.com/api/v1/search?query=${topic}&tags=story`

        }else if(author){
            url = `https://hn.algolia.com/api/v1/search?tags=story,author_${author}`
        }
        
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
          stories: data.hits,
          isFetching: false
        }))
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false})
        })
      }

    render() {
        if(this.state.isFetching){
            return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar variant="square">
                            H
                        </Avatar>
                        <Typography style={{marginLeft:"10pt"}} component="h4" variant="h4" >
                            Hacker News Search
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                <div>Loading...</div>
            </div>
            )
        }

        if(!this.state.stories.length){
            return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar variant="square">
                            H
                        </Avatar>
                        <Typography style={{marginLeft:"10pt"}} component="h4" variant="h4" >
                            Hacker News Search
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                <div>...No results found...</div>
            </div>
            )
        }
        

        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar variant="square">
                            H
                        </Avatar>
                        <Typography style={{marginLeft:"10pt"}} component="h4" variant="h4" >
                            Hacker News Search
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                {this.state.stories.map(item => (
                    <Body key = {item.objectID} item = {item} />
                ))}
            </div>
        )
    }
}