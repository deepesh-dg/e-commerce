import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../../../state/Cart';
import { useAppSelector } from '../../../../state/store';
import style from './ManageQuantity.module.scss';

export function ManageQuantity({ productId }: { productId: string }) {
	const cart = useAppSelector((store) => store.cart);
	const dispatch = useDispatch();
	const { quantity } = cart.products.filter((product) => product.id === productId)[0];

	return (
		<div className={style.main}>
			<button
				className='btn btn-primary'
				onClick={() => dispatch(changeQuantity({ id: productId, quantity: quantity - 1 }))}
			>
				-
			</button>
			<div className='mx-3'>{quantity}</div>
			<button
				className='btn btn-primary'
				onClick={() => dispatch(changeQuantity({ id: productId, quantity: quantity + 1 }))}
			>
				+
			</button>
		</div>
	);
}

export default ManageQuantity;
