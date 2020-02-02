import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';

class Navbar1 extends Component {
    render() {
        const navbarItems = [{
            label: "Item 1",
            target: "item-1"
        }, {
            label: "Item 2",
            target: "item-2"
        }, {
            label: "Item 3",
            target: "item-3"
        }, {
            label: "Item 4",
            target: "item-4"
        }, {
            label: "Item 5",
            target: "item-5"
        }, {
            label: "Item 6",
            target: "item-6"
        }, ]
        return (
            <div>
                <NavBar items={navbarItems} offset={-80} duration={500} delay={0}>
                </NavBar>
                <div className="container">
                    <ElementsWrapper items={navbarItems}>
                        <div name="item-1" className="item">item 1</div>
                        <div name="item-2" className="item">item 2</div>
                        <div name="item-3" className="item">item 3</div>
                        <div name="item-4" className="item">item 4</div>
                        <div name="item-5" className="item">item 5</div>
                        <div name="item-6" className="item">item 6</div>
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}
export default Navbar1;