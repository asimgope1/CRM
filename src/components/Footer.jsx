import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='footer d-block d-md-flex justify-content-between text-md-start text-center'>
			<p className='mb-md-0 mb-1'>
				Copyright &copy; {new Date().getFullYear()}{" "}
				<span className='fw-semibold text-primary'>CRMS</span>
			</p>
			<div className='d-flex align-items-center gap-2 footer-links justify-content-center justify-content-md-end'>
				<Link to='#'>About</Link>
				<Link to='#'>Terms</Link>
				<Link to='#'>Contact Us</Link>
			</div>
		</footer>
	);
};

export default Footer;
