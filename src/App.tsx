import React, { Component } from 'react';
import 'reset-css'
import NavbarScroller from './components/'
// import NavbarScrollerData from './ExampleData'


const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "Item 1", to: "/" },
    { name: "Item 2", to: "/" },
    { name: "Item 3", to: "/" },
    { name: "Item 4", to: "/" },
    { name: "Item 5", to: "/" },
    { name: "Item 6", to: "/" },
    { name: "Item 7", to: "/" },
    { name: "Item 8", to: "/" },
  ]
}

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <NavbarScroller brand={brand} links={links} />
      </div>
    );
  }
}

