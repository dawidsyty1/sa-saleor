import React, { Component } from 'react';
import '../static/css/style.css'
import '../static/css/flaticon.css'
import Skill from '../components/Skill'

class Skills extends Component {
  render() {
    return (
		<div class="container ftco-about ftco-counter img ftco-section" id="skills-section">
				<div class="row justify-content-center pb-5">
				<div class="col-md-12 heading-section text-center  ">
					<span class="subheading">Skills</span>
					<h2 class="mb-4">My Skills</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
				</div>
				<div class="row">
				<Skill description="Software development" progressValue={70}/>
				<Skill description="Architecture" progressValue={70}/>
				<Skill description="Python" progressValue={70}/>
				<Skill description="React" progressValue={30}/>
				<Skill description="Cloud AWS/GCP" progressValue={30}/>
				<Skill description="Docker" progressValue={60}/>
				</div>
				<div class="row justify-content-center py-5 mt-5">
          <div class="col-md-12 heading-section text-center  ">
          	<span class="subheading">What I Do</span>
            <h2 class="mb-4">Strategy, design and a bit of magic</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div class="row">
					<div class="col-md-4 text-center d-flex  ">
						<div class="services-1">
							<span class="icon">
								<i class="flaticon-analysis"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5"><a href="/">Explore</a></h3>
								<h4>Design Sprints</h4>
								<h4>Product Strategy</h4>
								<h4>UX Strategy</h4>
							</div>
						</div>
					</div>
					<div class="col-md-4 text-center d-flex  ">
						<div class="services-1">
							<span class="icon">
								<i class="flaticon-flasks"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5"><a href="/">Create</a></h3>
								<h4>Information</h4>
								<h4>UX/UI Design</h4>
								<h4>Branding</h4>
							</div>
						</div>
					</div>
					<div class="col-md-4 text-center d-flex">
						<div class="services-1">
							<span class="icon">
								<i class="flaticon-ideas"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5"><a href="/">Learn</a></h3>
								<h4>Prototyping</h4>
								<h4>User Testing</h4>
								<h4>UI Testing</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Skills;
