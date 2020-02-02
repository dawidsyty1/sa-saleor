import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import about_image from '../static/images/about-1.jpg'

class AboutMe extends Component {
  render() {
    return (
		<div class="container ftco-about ftco-counter img ftco-section" id="about-section">
    		<div class="row d-flex">
    			<div class="col-md-6 col-lg-5 d-flex">
					<div class="img-about img d-flex align-items-stretch">
    					<div class="overlay"></div>
						<img class="one-third order-md-last img" src={about_image} alt="My Face"/>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-7 pl-lg-5 py-5">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ">
		          	<span class="subheading">Welcome</span>
					<h2 class="mb-4">About Me</h2>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		          </div>
		        </div>
		        <div class="row">
		        	<div class="col-md-6">
		        		<div class="media block-6 services d-block ">
		              <div class="icon"><span class="flaticon-analysis"></span></div>
		              <div class="media-body">
		                <h3 class="heading mb-3">Software development</h3>
		                <p>A small river named Duden flows by their place and supplies.</p>
		              </div>
		            </div> 
		        	</div>
		        	<div class="col-md-6">
		        		<div class="media block-6 services d-block ">
		              <div class="icon"><span class="flaticon-analysis"></span></div>
		              <div class="media-body">
		                <h3 class="heading mb-3">Web Application</h3>
		                <p>A small river named Duden flows by their place and supplies.</p>
		              </div>
		            </div> 
		        	</div>
					<div class="counter-wrap d-flex mt-md-3">
					<div class="text p-4 pr-5 bg-primary">
						<p class="mb-0">
							<span class="number" data-number="200">200</span>
							<span>Finished Projects</span>
						</p>
					</div>
					</div>
		        </div>
	        </div>
        </div>
    	</div>
    );
  }
}

export default AboutMe;
