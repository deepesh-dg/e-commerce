import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProduct } from '../common';
import { ProductCard } from '../components';
import Shimmer from '../components/product-card/Shimmer';
import { conf } from '../conf';
import useFetch from '../hooks/useFetch';
import useTitle from '../hooks/useTitle';

const Home = () => {
	useTitle('Home');

	const [urlSearchParam] = useSearchParams();
	const urlQuery = urlSearchParam.get('search_query') || '';

	const { data, loader, error } = useFetch<IProduct[]>(`${conf.api}products`, {});

	const shimmerUILength: number = 12;
	const shimmerUi: number[] = [];

	for (let i = 0; i < shimmerUILength; i++) shimmerUi.push(i);

	return (
		<div className='py-5'>
			<div className='container'>
				<div className='row g-3'>
					{loader &&
						shimmerUi.map((i) => (
							<div className='col-12 col-sm-6 col-lg-4 col-xl-3' key={i}>
								<Shimmer />
							</div>
						))}

					{error && <div className='error'>Sorry! Error Fetching Products</div>}

					{data &&
						data
							.filter((product) => product.title.toLowerCase().includes(urlQuery.toLowerCase()))
							.map((product) => (
								<div key={product.id} className='col-12 col-sm-6 col-lg-4 col-xl-3'>
									<ProductCard product={product} />
								</div>
							))}
				</div>
			</div>
		</div>
	);
};

export default Home;
