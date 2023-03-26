import React, { useEffect, useId, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './SearchBar.module.scss';

export const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const id = useId();

	const [urlSearchParam] = useSearchParams();
	const urlQuery = urlSearchParam.get('search_query') || '';

	const navigate = useNavigate();

	useEffect(() => {
		if (urlQuery && searchQuery !== urlQuery) setSearchQuery(urlQuery);
	}, [urlQuery]);

	useEffect(() => {
		if (searchQuery) {
			navigate({
				pathname: '/',
				search: '?search_query=' + searchQuery,
			});
		} else {
			navigate({
				pathname: '/',
			});
		}
	}, [searchQuery, navigate]);

	return (
		<div className={style.searchBar}>
			<input
				type='search'
				id={`search${id}`}
				className={`form-control ${style.searchInput}`}
				value={searchQuery}
				placeholder='Search'
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
