import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../common';
import { AddToCartButton } from '../addToCartButton';
import style from './ProductCard.module.scss';

export const ProductCard = ({ product }: { product: IProduct }) => {
	return (
		<div className={style.productItem}>
			<div className={style.imageContainer}>
				<div className={style.rating}>{product.rating.rate}</div>
				<Link to={`product/${product.id}`}>
					<div className={style.imgWrapper}>
						<img src={product.image} alt={product.title} className='img-fluid' />
					</div>
				</Link>
			</div>
			<div className={style.content}>
				<div className={style.titlePrice}>
					<h6 className={style.title} title={style.title}>
						<Link to={`product/${product.id}`}>{product.title}</Link>
					</h6>
					<p className={style.price}>
						₹<strong>{product.price}</strong>
					</p>
				</div>
				<div className={style.addToCartBtn}>
					<AddToCartButton productId={product.id.toString()} />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
