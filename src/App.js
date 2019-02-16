import React, { Component } from 'react';
import {TextInput} from './components/solid'
import logo from './logo.svg';
import './css/index.sass';

class App extends Component {
  render() {
    return (
      <form action="" class="solid form">
        <header>
          <h1>Form Title</h1>
        </header>
        <TextInput name="username" label="Username or email" initialValue=""/>
      </form>
    );
  }
}

export default App;
