import React from 'react';
import { Link } from 'react-router-dom';
import { AddToCartButton } from '..';
import { IProduct } from '../../common';
import style from './CartItem.module.scss';
import DeleteItem from './DeleteItem';

export const CartItem = ({ product }: { product: IProduct }) => {
	return (
		<div className='row g-3'>
			<div className='col-12 col-sm-3'>
				<Link to={'/product/' + product.id}>
					<img src={product.image} alt={product.title} className='img-fluid' />
				</Link>
			</div>
			<div className='col-12 col-sm-7'>
				<div className={style.content}>
					<Link to={'/product/' + product.id}>
						<h6 className={style.title}>{product.title}</h6>
					</Link>
					<div className='d-flex justify-content-between'>
						<div style={{ width: '150px' }}>
							<AddToCartButton productId={product.id.toString()} />
						</div>
					</div>
				</div>
			</div>
			<div className='col-12 col-sm-2'>
				<div className='d-flex flex-sm-wrap h-100 justify-content-sm-end align-items-center align-content-sm-between'>
					<div className='fw-bold d-flex justify-content-sm-end align-items-sm-center w-100'>
						<small>₹</small>
						<span className={style.price}>{product.price.toFixed(2)}</span>
					</div>
					<DeleteItem productId={product.id.toString()} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;
