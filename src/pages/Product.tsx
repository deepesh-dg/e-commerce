import React from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../common';
import { AddToCartButton } from '../components';
import { conf } from '../conf';
import useFetch from '../hooks/useFetch';
import useTitle from '../hooks/useTitle';
import style from './Product.module.scss';

const Product = () => {
	const { productId } = useParams();

	const { data, error, loader } = useFetch<IProduct>(`${conf.api}products/${productId}`, {});

	useTitle(data?.title || '');

	return (
		<div className='container'>
			<div className='row'>
				{data && (
					<>
						<div className='col-12 col-md-5'>
							<img src={data.image} alt={data.title} className='img-fluid' />
						</div>
						<div className='col-12 col-md-4'>
							<h1 className={style.title}>{data.title}</h1>
							<hr />
							<p className={style.price}>
								<sup>₹</sup>
								{data.price.toFixed(2)}
							</p>
							<p>
								<small>Inclusive of all taxes</small>
							</p>
							<hr />
							<p className='mb-3'>{data.description}</p>
						</div>
						<div className='col-12 col-md-3'>
							<div className={style.sideBox}>
								<p className={style.price + ' mb-2'}>
									<sup>₹</sup>
									{data.price.toFixed(2)}
								</p>
								<p className='mb-3'>{data.description}</p>

								<AddToCartButton productId={data.id.toString()} className='mb-2' />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Product;
