import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import about_image from '../static/images/about-1.jpg'

const AboutMeImage = () => (
	<div class="col-md-6 col-lg-5 d-flex">
		<div class="img-about img d-flex align-items-stretch">
			<div class="overlay"></div>
			<img class="one-third order-md-last img" src={about_image} alt="My Face" />
		</div>
	</div>
);

const AboutMeIntroduction = ({ trans }) => (
	<div class="row justify-content-start pb-3">
		<div class="col-md-12 heading-section ">
			<span class="subheading">{trans('about_me.welcome')}</span>
			<h2 class="mb-4">{trans('about_me.about_me')}</h2>
			<p>{trans('about_me.description')}</p>
		</div>
	</div>
);

const AboutMeServices = ({ title, description }) => (
	<div class="col-md-6">
		<div class="media block-6 services d-block ">
			<div class="icon"><span class="flaticon-analysis"></span></div>
			<div class="media-body">
				<h3 class="heading mb-3">{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	</div>
);


const AboutMeFinishedProjects = () => (
	<div class="counter-wrap d-flex mt-md-3">
		<div class="text p-4 pr-5 bg-primary">
			<p class="mb-0">
				<span class="number" data-number="200">5</span>
				<span>Finished Projects</span>
			</p>
		</div>
	</div>
)

const AboutMe = ( {trans} ) => (
	<div class="container ftco-about ftco-counter img ftco-section" id="about-section">
		<div class="row d-flex">
			<AboutMeImage />

			<div class="col-md-6 col-lg-7 pl-lg-5 py-5">
				<AboutMeIntroduction trans={trans}/>

				<div class="row">

					<AboutMeServices title={trans('about_me.service_one_title')}
						description={trans('about_me.service_one_description')} />

					<AboutMeServices title="Web Application"
						description="A small river named Duden flows by their place and supplies." />

					<AboutMeServices title="Web Scraping"
						description="A small river named Duden flows by their place and supplies." />

					<AboutMeFinishedProjects />
				</div>
			</div>
		</div>
	</div>
);


export default AboutMe;
