import { Component } from "react";
import Input from './Input'
import Body from './Body'
import NavBar from "./NavBar";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export default class Head extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stories: [""],
            frontPageStories: [],
            isFetching: false,
            firstLoad: false
        }
    }
    componentDidMount(){
        fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
        .then(response => response.json())
        .then(data => this.setState({
          frontPageStories: data.hits,
          isFetching: false,
          firstLoad: true
        }))
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false})
        })
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
          isFetching: false,
          firstLoad: false
        }))
        .catch(error => {
            console.log(error);
            this.setState({...this.state, isFetching: false})
        })
      }

      goHome = () => {
          this.setState({
              firstLoad: true
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
                <CircularProgress style={{marginLeft:"5pt"}} />
            </div>
            )
        }

        if(this.state.firstLoad){
            return(
                <div>
                    <NavBar />
                    <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                    <Input searchItem ={this.searchItem} />
                    <Typography style={{marginLeft:"10pt", fontStyle:"italic"}} component="h4" variant="h4">Latest News:</Typography>
                    {this.state.frontPageStories.map((item, index) => (
                        <Body key = {index} item = {item} />
                    ))}
                </div>
            )
    
        }

        if(!this.state.stories.length){
            return(
            <div>
                <NavBar home={this.goHome} />
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                <div style={{marginLeft:"5pt"}}>...No results found...</div>
            </div>
            )
        }
        
        return(
            <div>
                <NavBar home={this.goHome} />
                <h3 style={{marginLeft:"5pt"}}>Search Criteria:</h3>
                <Input searchItem ={this.searchItem} />
                {this.state.stories.map((item, index) => (
                    <Body key = {index} item = {item} />
                ))}
            </div>
        )
    }
}