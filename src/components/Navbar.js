import React, { Component } from 'react';


class Navbar extends Component {
    defaultStyle = "navbar navbar-expand-lg ftco_navbar ftco-navbar-light site-navbar-target";
    state = {
        backgroundColor: "white",
        isTop: false,
        additionalClassStyle: this.defaultStyle,
        stylePosition:"none"
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 200;
            console.log(window.scrollY);
            if (isTop !== this.state.isTop) {                
                this.setState({ additionalClassStyle: this.defaultStyle });
                this.setState({ stylePosition:"fixed"});
            }else{                
                var newState = this.defaultStyle + " awake scrolled "
                this.setState({ stylePosition:"none"});
                this.setState({ additionalClassStyle: newState });
            }
        });
    }
    render() {
    return (
        <nav class={this.state.additionalClassStyle}
            style={{position: this.state.stylePosition}}
            id="ftco-navbar">      

        <div class="container">
            <a class="navbar-brand" href="index.html">Software Nest</a>
            <button class="navbar-toggler js-fh5co-nav-toggle " type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav nav ml-auto">
                <li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
                <li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
                <li class="nav-item"><a href="#skills-section" class="nav-link"><span>Skills</span></a></li>
                <li class="nav-item"><a href="#blog-section" class="nav-link"><span>My Blog</span></a></li>
                <li class="nav-item"><a href="#contact-section" class="nav-link"><span>Contact</span></a></li>
            </ul>
            </div>
        </div>
        </nav>
    );
    }
}
export default Navbar;