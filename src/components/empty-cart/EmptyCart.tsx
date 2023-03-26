import React from 'react';
import { useDispatch } from 'react-redux';
import { empty } from '../../state/Cart';

export const EmptyCart = () => {
	const dispatch = useDispatch();

	const emptyCart = () => {
		dispatch(empty());
	};

	return (
		<button className='btn btn-danger' onClick={emptyCart}>
			Empty
		</button>
	);
};

export default EmptyCart;
