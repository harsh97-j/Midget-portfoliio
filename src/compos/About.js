import React from "react";

import {Card,CardTitle,CardText,CardActions,CardMenu,Grid,Cell}from "react-mdl";
import {NavLink} from "react-router-dom";

class About extends React.Component{
	render(){
		return (
			<div className="banner-about"> 
			<Grid>
             <Cell col={4} phone={12} tablet={12}><div className="banner-of-about">
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle>Qualfication</CardTitle>
            <CardText style={{color: '#000',fontSize:"20px",lineHeight:1.3}}>
                Persuing <strong>B.tech</strong> from Svvv indore,
                VIII semester, the stream being <strong>Information Teachnology</strong>
                <br />
            </CardText>
            <CardActions border>
                
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
                
            </CardMenu>

        </Card>
            </div></Cell>
             <Cell col={4}
             phone={12} tablet={12} >
                 <div className="banner-of-about">
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle>Skills and Interests</CardTitle>
            <CardText style={{color: '#000',fontSize:"20px",lineHeight:1.3}}>
                Since my High school years i have had a keen interest in <strong>Computer science</strong>
                and I opted to learn C/C++ in those years of my schooling.<br />
                In College I opted to learn <strong>php</strong> as my first <strong>server side scripting language</strong> to build my Minor Project, I also used <strong>html/css</strong> and a bit of
                <strong> javascript</strong>
                <br />
                Although <strong>php</strong> and a little knowledge of the front-end didn't seem to be enough for me so decided to shift my programing focus 
                onto <strong>Java</strong>, which proved out to be my <strong>#1 goto programming language</strong>.<br />
                Currently I have completed a handlfull of projects which are briefed in the <NavLink to="/profile">Profile</NavLink> section of this site.<br />
                I would like to consider my self more of a <strong>Full Stack Software Developer</strong>, as, I find it <strong>Exquisite </strong>
                to work on both <strong>Backend</strong> as well as <strong>Frontend</strong> and on multi platform technologies specially web and Desktop

            </CardText>
            <CardActions border>
                
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
                
            </CardMenu>

        </Card>
            </div>
             </Cell>
             <Cell col={4}
             phone={12} tablet={12} >
                 <div className="banner-of-about">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
            <CardTitle>This Site</CardTitle>
            <CardText style={{color: '#000',fontSize:"20px",lineHeight:1.3}}>
                This Site has been a product of a few Tasks that I wished to work on for quite a time.
                <br />
                This site is build on <strong>React</strong> which I find loved learning as it is <strong>Powerfull</strong> and a very capable framework
                <br />
                This site shall be updated timely with new features and updates, with more new learnt features of <strong>React</strong>
            </CardText>
            <CardActions border>
                
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
                
            </CardMenu>

        </Card>
            </div>
             </Cell>
            </Grid>
			
			
			
			
			

			

			</div>
			);
	}
}

export default About;