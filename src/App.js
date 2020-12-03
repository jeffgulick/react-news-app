import { Component } from 'react';
import NavBar from "./Components/NavBar";
import Head from './Components/Head'

export default class App extends Component {
  render(){
    return(
      <div>
        <NavBar />
        <Head />
      </div>
    )
  }
}

