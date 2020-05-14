import React from "react";
import "./navbar.css";
import {Grid,Cell} from "react-mdl";
import {Spring} from "react-spring/renderprops";
import {NavLink} from "react-router-dom";


class LandingPage extends React.Component{
	
	render(){
		
		return (
			
						<div>

						
						<div style={{filter:"blur(10px)"}} className="animate__animated animate__fadeIn landing-content"></div>
						
						<div className="bg-text">
							
								
							<Spring
							from={{opacity:0}}
							to={{opacity:1}}
							config={{delay:500,duration:2000}}
							>
							{props=>(
								<div style={props}>
								<h3>Hi,</h3>
								</div>
								 )}	

							</Spring>
							<Spring
							from={{opacity:0}}
							to={{opacity:1}}
							config={{delay:1000,duration:2000}}
							>
							{props=>(
								<div style={props}>
								<h2>I am Harsh, </h2><h2>this is my <strong>"small" Midget Portfolio</strong></h2>
								</div>
								 )}	

							</Spring>
							<Spring
							from={{opacity:0}}
							to={{opacity:1}}
							config={{delay:1500,duration:2000}}
							>
							{props=>(
								<div style={props}>
								<h3>The Objective behind this midget Portfolio is
								 to <strong>Acknowledge</strong> the capabilities of one 
								 of the most 
								 exquisite frontEnd framework -<strong>React</strong></h3>
								 
								</div>
								 )}	

							</Spring>
							</div>
							{/*Below the background image*/}
							
							<Spring
							from={{opacity:0}}
							to={{opacity:1}}
							>
								{props=>(

							<div style={props} >		
							<div className="banner-intro">
							<Grid>
							<Cell col={12}>
							<div className="banner">
								
			<img className="codeSymbol" alt="image_here" src="https://ya-webdesign.com/transparent250_/person-svg-tie-icon-15.png" ></img>
							<div className="fsd">
							<h1>Full stack developer</h1>
							<hr />
							<h3>Java | sql | php | javascript | React | html-css </h3></div>
							<br />
							
							<NavLink className="banner-btn " to="/about">
								About
							</NavLink>
							<NavLink className="banner-btn" to="/profile">
								Profile
							</NavLink>
							</div>
							</Cell>
							</Grid>
							</div>
							</div>

									)}
							</Spring>

							

						</div>
			
			);
	}
}

export default LandingPage;