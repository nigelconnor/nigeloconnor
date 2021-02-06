import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Insurance from './components/insurance';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Insurance data={this.state.landingPageData.Insurance} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
