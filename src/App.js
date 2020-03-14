import React, { Fragment, Component } from 'react';
import './App.css';
import Items from './components/Items'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { config as i18nextConfig } from './translations';

i18next.init(i18nextConfig);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: 'en-eu'
    };
  }

  languageChanged = () => {
    if (this.state.language === 'en-eu' ) {
      i18next.changeLanguage('pl-pl');
      this.setState({ language: 'pl-pl' });
    } else {
      i18next.changeLanguage('en-eu');
      this.setState({ language: 'en-eu' });
    }
  }

  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <Items
          languageChanged={this.languageChanged}
        />
      </I18nextProvider>
    );
  }
}

export default App;
