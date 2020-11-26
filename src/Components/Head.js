import { Component } from "react";
import Input from './Input'
import Body from './Body'

export default class Head extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stories: []
        }
    }

    searchItem = (item) => {
        this.setState({
            text: item.text,
            author: item.author
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
          stories: data.hits
        }))
        .catch(error => console.log(`Error, ${error}`))
      }

    render() {
        return(
            <div>
                <div>
                    <h1>Hacker News</h1>
                    <h3>Search Criteria</h3>
                    <Input searchItem ={this.searchItem} />
                </div>
                {this.state.stories.map(item => (
                    <Body key = {item.objectID} item = {item} />
                ))}
            </div>
        )
    }
}
 