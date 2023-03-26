import React from 'react';
import logo from '../../assets/images/logo.png';
import style from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer id='footer' className={`footer bg-light ${style.footer}`}>
			<div className='container'>
				<div className='text-center'>
					<img src={logo} alt='Logo' className={`img-fluid ${style.logo}`} />
					<p>An Open-Source Project</p>
					<p>
						Developed By{' '}
						<a href='http://github.com/deepesh-dg' target='_blank' rel='noopener noreferrer'>
							Deepesh Gupta
						</a>
					</p>
					<p>
						<a
							href='http://github.com/deepesh-dg/e-commerce'
							target='_blank'
							rel='noopener noreferrer'
						>
							Check out the Source Code on Github
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
