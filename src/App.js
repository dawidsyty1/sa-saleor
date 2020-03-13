import React, { Fragment, Component } from 'react';

import './App.css';
import Navbar from './components/Navbar'
import HomeSlider from './components/HomeSlider'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { withTranslation } from 'react-i18next';


class App extends Component {

  render() {
    const { props } = this;
    console.log('test', this.props.t('menu.home') );
    return (
      <Fragment>
        <Navbar/>
        <HomeSlider trans={props.t}/>
        <AboutMe/>
        <Skills/>
        <Contact/>
        <Footer/>
      </Fragment>
    );
  }
}

export default withTranslation('common')(App);
