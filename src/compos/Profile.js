import React from "react";
import {Grid,Cell} from "react-mdl";
class Profile extends React.Component{
	render(){
		return (
			<div className="banner-profile">
				<Grid style={{}}>
					<Cell col={4} className="profile_cell_1">
						<img className="prof-img animate__animated animate__fadeInRightBig" src="https://ya-webdesign.com/transparent250_/person-svg-tie-icon-15.png" alt="tie-icon"></img>
						<h3>Harsh Kamle</h3>
						<h4 className="animate__animated animate__fadeInRightBig">Full Stack developer</h4>
						<hr />
						
						<h5><strong>Email:</strong> harshkamle.97@gmail.com</h5>
							<h5><strong>Location:</strong> Indore( M.P.)</h5>
							<h5><strong>Phone:</strong> 9340920692</h5>
						
						<p></p>
					</Cell>
			
					<Cell col={8} style={{background:"#27221b",textAlign:"left",borderRadius:12,color:"#FFFF",padding:50}}>
						<h4 style={{textDecoration:"underline",lineHeight:1.5}}>Education: </h4>
						<h5 style={{lineHeight:1.3}} className="animate__animated animate__fadeInUp">
							<strong>Degree:</strong> B.tech - InforationTechnology <br />
							<strong>University:</strong> Svvv Indore <br />
							<strong>Year Of Graduation:</strong> 2020
						</h5>
						<hr />
						<h4 style={{textDecoration:"underline",lineHeight:1.5}}>Experience: </h4>
						<h5 style={{lineHeight:1.3}} className="animate__animated animate__fadeInUp">
							<strong>Internship:</strong> 3.5 month  <br />
							<strong>Role:</strong> Full stack web developer (php) <br />
							<strong>Industry:</strong> TechAchiever Pvt. Ltd.<br />
							<strong>Projects:</strong> Cegano.in, netcomm panel (netcomm computers)
						</h5>
						<h4 style={{textDecoration:"underline",lineHeight:1.5}}>Projects: </h4>
						<h5 style={{lineHeight:1.3}} className="animate__animated animate__fadeInUp"> 
							<strong>Minor Project:</strong> Online Auction system  <br />
							<strong>Description:</strong> Online Auction website with product cart and Auction functionality<br />
							<strong>Role:</strong> Team leader and coder<br />
							<strong>Technology:</strong> html/css,javascript few ajax components ajax, php, mysql [maria db], Xampp
						</h5>
						<h5 style={{lineHeight:1.3}} className="animate__animated animate__fadeInUp">
							<strong>Minor Project:</strong> Automatic Attandence and Messaging system<br />
							<strong>Description:</strong> A desktop App, enhanced with automated excel<br />
							sheet writer and google mail service, coupled with stand alone fingerprint device<br />
							<strong>Role:</strong> Team leader and coder and device incharge<br />
							<strong>Technology:</strong> javafx, core java, Arduino uno and respective electrical components
						</h5>
						<h5 style={{lineHeight:1.3}} className="animate__animated animate__fadeInUp">
							<strong>Personal Project:</strong> Stamped Detection<br />
							<strong>Description:</strong> A desktop and an Android App, the desktop is enabled with live video stream of target device<br />
							which incorporates OpenCV and HaarCascade Object detection Cascade classifier to detect stamped victims and generates alert notifications<br />
							<strong>Role:</strong> developer<br />
							<strong>Technology:</strong> javafx, core java, Android SqLite DB, OpenCV, supervised Learning (Classification)
						</h5>
					</Cell>
				</Grid>
			</div>
			);
	}
}

export default Profile;