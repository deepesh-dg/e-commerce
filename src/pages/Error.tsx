import React from 'react';
import { NotFound } from '../components';
import useTitle from '../hooks/useTitle';

const Error = () => {
	useTitle('Not Found');
	return <NotFound />;
};

export default Error;
