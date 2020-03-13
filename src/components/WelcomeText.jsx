import React, { Component } from 'react';
import '../static/css/style.css'

const WelcomeText = ({ trans }) => (
	<div class="one-forth d-flex  align-items-center" data-scrollax=" properties: { translateY: '70%' }">
		<div class="text">
			<span class="subheading">{trans('welcome.welcome')}</span>
			<h1 class="mb-4 mt-3">{trans('welcome.first_line')}<span>{trans('welcome.first_line_span')}</span></h1>
			<h2 class="mb-4">{trans('welcome.second_line')}</h2>
			<p><a href="#contact-section" class="btn-custom">{trans('welcome.third_line')}</a></p>
		</div>
	</div>
);

export default WelcomeText;
