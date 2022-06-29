import React from 'react';
import Header from '../shared/components/Header';

export const LayoutAdmin = (props) => {
	return (
		<>
			<Header />
			<div style={{ boxShadow: '2px 2px 2px #bbb' }}>{props.children}</div>
		</>
	);
};
