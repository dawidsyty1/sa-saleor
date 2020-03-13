import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './translations';
import './App.css';
import Navbar from './components/Navbar'
import HomeSlider from './components/HomeSlider'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

i18next.init(i18nextConfig);

class App extends Component {

  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <Navbar/>
        <HomeSlider/>
        <AboutMe/>
        <Skills/>
        <Contact/>
        <Footer/>
      </I18nextProvider>
    );
  }
}

export default App;
