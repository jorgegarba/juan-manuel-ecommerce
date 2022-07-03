import React from 'react';
import Header from '../shared/components/Header';

export const LayoutAdmin = (props) => {
	return (
		<>
			<Header />
			<div className="container mt-3">{props.children}</div>
		</>
	);
};
