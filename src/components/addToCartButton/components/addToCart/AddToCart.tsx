import { useDispatch } from 'react-redux';
import { add } from '../../../../state/Cart';
import style from './AddToCart.module.scss';

export function AddToCart({ productId }: { productId: string }) {
	const dispatch = useDispatch();
	return (
		<button
			className={`btn btn-primary ${style.btn}`}
			onClick={() => dispatch(add({ id: productId, quantity: 1 }))}
		>
			Add To Cart
		</button>
	);
}

export default AddToCart;
