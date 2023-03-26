import React from 'react';
import style from './Shimmer.module.scss';

const Shimmer = () => {
	return (
		<div className={style.shimmer}>
			<div className={style.image}></div>
			<div className={style.content}>
				<div className={style.titlePrice}>
					<div className={style.title}></div>
					<div className={style.price}></div>
				</div>
				<div className={style.btn}></div>
			</div>
		</div>
	);
};

export default Shimmer;
