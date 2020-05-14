import React from "react";
import {Switch,Route} from "react-router-dom";
import LandingPage from "./compos/LandingPage";
import About from "./compos/About";
import Profile from "./compos/Profile";


const Main=()=>{
	
	return (

			<Switch>
			<Route exact path="/">
			<LandingPage data="thisIsTheLandingPage" />
			</Route>
			<Route path="/about" component={About}/>
			<Route path="/profile" component={Profile} />
			</Switch>

		);
		
		
}
export default Main;