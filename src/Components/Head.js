import { Component } from "react";
import Search from './Search'

export default class Head extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ""
        }
    }

    searchItem = (item) => {
        this.setState({
            search: item
        })
        console.log(search)
      }

    render() {
        return(
            <div>
                <h1>Hacker News</h1>
                <h3>Search Criteria</h3>
                <Search onSubmit ={this.searchItem} />
            </div>
        )
    }
}