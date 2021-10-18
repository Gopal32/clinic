import React from 'react';
import Wave from '../img/wave.png';
import Clinic from '../img/clinic.png';
import Profile from '../img/profile.svg';
import { NavLink } from 'react-router-dom';

const Register = () => {

    return ( 
        <>
		<div class="main_register">
       		<img class="main_wave" src={Wave} alt="wave" />
			<div class="container">
				<img class="img" src={Clinic} alt="img" /> 
				<div class="login-content">
					<form >
						<img class="profile_img" src={Profile} alt="profile" />
						<h1 class="title">Welcome</h1>
           				<div class="input-div one">
           		   			<div class="i">
           		   			</div>
           		   			<div class="div">
								<input type="text" placeholder="First Name" class="input" />
           		   			</div>
           				</div>
						<div class="input-div one">
           		   			<div class="i">
           		   			</div>
           		   			<div class="div">
								<input type="text" placeholder="Last Name" class="input" />
           		   			</div>
           				</div>
						<div class="input-div one">
							<div class="i">
           		   			</div>
           		   			<div class="div">
								<input type="email" placeholder="Email" class="input" />
           		   			</div>
           				</div>
           		    	<div class="input-div one">
							<div class="i"> 
							</div>
							<div class="div">
								<input type="password" placeholder="Password" class="input" />
							</div>
						</div>
						<div class="input-div one">
							<div class="i"> 
							</div>
							<div class="div">
								<input type="password" placeholder="Confirm Password" class="input" />
							</div>
						</div>
						<NavLink to='*' class="navlink">Forgot Password?</NavLink>
				        <input type="submit" class="btn" value="Login" />
           			</form>
        		</div>
    		</div>
		</div>
        </>
    )
}

export default Register;
