import React, { useEffect, useState } from 'react';
import { IProduct } from '../common';
import { CartItem, EmptyCart } from '../components';
import { conf } from '../conf';
import useTitle from '../hooks/useTitle';
import { useAppSelector } from '../state/store';
import style from './Cart.module.scss';

const Cart = () => {
	const cart = useAppSelector((state) => state.cart);
	const [products, setProducts] = useState<IProduct[]>([]);
	const subTotalAmount = products
		.map<number>((product) => {
			const cartProduct = cart.products.filter((p) => product.id.toString() === p.id)[0];

			const quantity = cartProduct ? cartProduct.quantity : 0;
			const price = product.price;

			return price * quantity;
		})
		.reduce((prev, next) => prev + next, 0)
		.toFixed(2);

	console.log(products);

	useEffect(() => {
		const getProducts = async () => {
			const promises: Promise<any>[] = [];

			cart.products.forEach((product) => {
				promises.push(fetch(`${conf.api}products/${product.id}`));
			});

			try {
				setProducts(await Promise.all((await Promise.all(promises)).map((res) => res.json())));
			} catch (e) {}
		};

		getProducts();
	}, [cart]);

	useTitle(`${cart.total} - Cart`);

	return (
		<div className='container'>
			<div className='row g-3'>
				<div className='col-12 col-lg-8 col-xl-9'>
					<div className={style.box}>
						<div className='d-flex justify-content-between'>
							<h1 className='mb-0'>Shopping Cart</h1>
							<span>
								<EmptyCart />
							</span>
						</div>
						<hr />
						{products.map((product) => (
							<div className='item' key={product.id}>
								<CartItem product={product} />
								<hr />
							</div>
						))}
						<div className='text-end' style={{ fontSize: '125%' }}>
							Subtotal ({cart.total} {cart.total > 1 ? 'items' : 'item'}):&nbsp;
							<span className='fw-bold d-inline-flex justify-content-end align-items-center'>
								<small style={{ fontSize: '70%' }}>₹</small>
								{subTotalAmount}
							</span>
						</div>
					</div>
				</div>
				<div className='col-12 col-lg-4 col-xl-3'>
					<div className={style.box}>
						<div style={{ fontSize: '125%' }} className='mb-3'>
							Subtotal ({cart.total} {cart.total > 1 ? 'items' : 'item'}):&nbsp;
							<span className='fw-bold d-inline-flex justify-content-end align-items-center'>
								<small style={{ fontSize: '70%' }}>₹</small>
								{subTotalAmount}
							</span>
						</div>
						<div className='d-grid gap-2'>
							<button className='btn btn-primary'>Proceed to Buy</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
