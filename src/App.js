import { Component } from 'react';
import Head from './Components/Head'

export default class App extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   stories: {}
    // }

  }
  render(){
    return(
      <div>
        <Head />
      </div>
    )
  }
}

