import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';

export const NotFound = () => {
	return (
		<section className={style.page_404}>
			<div className='container text-center'>
				<div className={style.four_zero_four_bg}>
					<h1 className=''>404</h1>
				</div>

				<div className={style.contant_box_404}>
					<h3 className='h2'>Look like you're lost</h3>

					<p>the page you are looking for not avaible!</p>

					<Link to={'/'} className={style.link_404}>
						<button className='btn btn-primary mt-3'>Go to Home</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
