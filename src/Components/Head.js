import { Component } from "react";
import Input from './Input'
import Body from './Body'
import NavBar from "./NavBar";
import CircularProgress from '@material-ui/core/CircularProgress';

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
                <NavBar />
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                <div style={{marginLeft:"5pt"}}>Loading... </div>
                <CircularProgress />
            </div>
            )
        }

        if(!this.state.stories.length){
            return(
            <div>
                <NavBar />
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                <div style={{marginLeft:"5pt"}}>...No results found...</div>
            </div>
            )
        }
        
        return(
            <div>
                <NavBar />
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                {this.state.stories.map(item => (
                    <Body key = {item.objectID} item = {item} />
                ))}
            </div>
        )
    }
}