import React from 'react';
import myImage from '../static/images/bg_1.jpg'
import '../static/css/style.css'

const HomeSlider = ({ trans }) => (
	<div class="home-slider  owl-carousel" id="home-section">
		<div class="slider-item ">
			<div class="container hero">
				<div class="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
					<img class="one-third order-md-last img" src={myImage} alt="My Face" />
					<div class="one-forth d-flex  align-items-center" data-scrollax=" properties: { translateY: '70%' }">
					<div class="text">
						<span class="subheading">{trans('welcome.welcome')}</span>
						<h1 class="mb-4 mt-3">{trans('welcome.first_line')}<span>{trans('welcome.first_line_span')}</span></h1>
						<h2 class="mb-4">{trans('welcome.second_line')}</h2>
						<p><a href="#contact-section" class="btn-custom">{trans('welcome.third_line')}</a></p>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
);

export default HomeSlider;
