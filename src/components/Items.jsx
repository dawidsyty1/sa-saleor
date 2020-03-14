import React, { Fragment, Component } from 'react';
import { withTranslation } from 'react-i18next';
import Navbar from './Navbar'
import HomeSlider from './HomeSlider'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'


class Items extends Component {
  render() {
    const { props } = this;
    return (
      <Fragment>
        <Navbar languageChanged={props.languageChanged}/>
        <HomeSlider trans={props.t}/>
        <AboutMe/>
        <Skills/>
        <Contact/>
        <Footer/>
      </Fragment>
    );
  }
}

export default withTranslation('common')(Items);
