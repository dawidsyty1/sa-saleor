import React, { Component } from 'react';
import myImage from '../static/images/bg_1.jpg'
import '../static/css/style.css'
import WelcomeText from './WelcomeText'

const HomeSlider = ({ trans }) => (
	<div class="home-slider  owl-carousel" id="home-section">
		<div class="slider-item ">
			<div class="container hero">
				<div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
					<img class="one-third order-md-last img" src={myImage} alt="My Face" />
					<WelcomeText trans={trans} />
				</div>
			</div>
		</div>
	</div>
);

export default HomeSlider;
