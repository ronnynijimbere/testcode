import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

const tempArray = [{
  fName: 'Ron',
  lName: 'Jimbo',
  email: 'ronmbo@gmail.com',
  age: 17,
  onlineStatus: true
}]

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline  header="Posts" desc="Click Btn to render Posts" tempArray={tempArray}/>
        </section>
      </div>
    );
  }
}

export default App;

