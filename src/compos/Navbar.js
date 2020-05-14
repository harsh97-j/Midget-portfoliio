import React from "react";
import "./navbar.css";
import {Layout,Header,Navigation,Drawer,Content} from "react-mdl";
import Main from "../Main";
import {NavLink,withRouter} from "react-router-dom";


class Navbar extends React.Component{
	constructor(){
		super();
		this.state={
		}
	}
	componentDidMount(){
			
		}
		
	render(){
	return(
		<div style={{height:"100vh", position: 'relative'}}>
    
    <Layout fixedHeader>
        <Header style={{background:"linear-gradient(to right,#512da8,#006064,#0d47a1)",display:"fixed"
    					}} 
        title={<span><span style={{ color: '#ddd' }}></span><strong>Midget Portfolio</strong></span>}>
            
        </Header>
        <Drawer className="navlink" title="Explore">
            <Navigation>
            
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/Profile">Profile</NavLink>
            </Navigation>
        </Drawer>
        <Content>
        	<div className="page-content">
        		{/*this loads the Route to other childern components*/}
        		<Main />
        	</div>
        </Content>
    </Layout>

</div>
			);
	}
}

export default withRouter(Navbar);