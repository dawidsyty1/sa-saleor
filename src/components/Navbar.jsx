import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withTranslation } from 'react-i18next';


class Navbar extends Component {

    constructor(props) {
        super();
        this.myInput = React.createRef();
    }

    defaultStyle = "navbar navbar-expand-lg ftco_navbar ftco-navbar-light site-navbar-target";
    state = {
        backgroundColor: "white",
        isTop: false,
        isNavbarMenu: false,
        additionalClassStyle: this.defaultStyle,
        stylePosition:"none",
        visibilityStatus:'hidden'
        
    };

    showNormalNavbar(force) {
        const isTop = window.scrollY < 200;
        if ((isTop !== this.state.isTop && isTop === true) || (force && isTop)) {
            this.setState({ additionalClassStyle: this.defaultStyle });
            this.setState({ stylePosition:"fixed"});
            this.setState({ isTop: true });
        } else if((this.state.isTop === true && isTop === false) || (force)){
            var newState = this.defaultStyle + " awake scrolled "
            this.setState({ stylePosition:"none"});
            this.setState({ additionalClassStyle: newState });
            this.setState({ isTop: false });
        }
    };

    showMenuNavbar(force){
        if((this.myInput.current.offsetWidth === 0 && this.state.isNavbarMenu === false)
            || (force && this.myInput.current.offsetWidth === 0)) {
            this.setState({ visibilityStatus: "visible"});
            this.setState({ isNavbarMenu: true });            
        } else if((this.myInput.current.offsetWidth !== 0 && this.state.isNavbarMenu === true)
            || (force && this.myInput.current.offsetWidth !== 0)){
            this.setState({ visibilityStatus: "hidden"});
            this.setState({ isNavbarMenu: false });
        }
    };

    updateNavbar(force) {
        this.showNormalNavbar(force);
        this.showMenuNavbar(force);
    };


    componentDidMount() {
        this.updateNavbar(true);
        document.addEventListener('scroll', () => {
            this.updateNavbar(false);
        });
    }



    render() {
    const { i18n } = this.props;
    const lang = i18n.language;
    console.log("lang", lang);
    return (
        <nav class={this.state.additionalClassStyle} style={{position: this.state.stylePosition}}
        id="ftco-navbar">

        <div class="container">
            <a class="navbar-brand" href="/">D.S.</a>

            <NavDropdown class="navbar-toggler" title="Menu" id="basic-nav-dropdown" style={{visibility: this.state.visibilityStatus}}>
                <NavDropdown.Item href="#home-section">{ this.props.t('menu.home') }</NavDropdown.Item>
                <NavDropdown.Item href="#about-section">About1</NavDropdown.Item>
                <NavDropdown.Item href="#skills-section">Skills</NavDropdown.Item>
                <NavDropdown.Item href="#contact-section">Contact</NavDropdown.Item>
            </NavDropdown>

            
            <div class="collapse navbar-collapse" id="ftco-nav" ref={this.myInput}>
            <ul class="navbar-nav nav ml-auto">
                <li class="nav-item"><a href="#home-section" class="nav-link"><span>{ this.props.t('navbar.home') }</span></a></li>
                <li class="nav-item"><a href="#about-section" class="nav-link"><span>{ this.props.t('navbar.about_me') }</span></a></li>
                <li class="nav-item"><a href="#skills-section" class="nav-link"><span>{ this.props.t('navbar.skills') }</span></a></li>
                <li class="nav-item"><a href="#contact-section" class="nav-link"><span>{ this.props.t('navbar.contact') }</span></a></li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }
}

export default withTranslation('common')(Navbar);
