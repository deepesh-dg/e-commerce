import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import SearchBar from './components/SearchBar';

export const Header = () => {
	return (
		<header className={style.header + ' bg-light'} id='header'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-4 col-md-3 col-xl-2 d-flex align-items-center justify-content-center'>
						<Link to={'/'} className='navbar-brand'>
							<img src={logo} alt='logo' className={`img-fluid ${style.logo}`} />
						</Link>
					</div>
					<div className='col-12 col-sm-8 col-md-6 col-xl-7 d-flex align-items-center justify-content-center'>
						<div className={style.searchBar}>
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
