import React from 'react';

const LoadingComponent = (props) => {
	const { title, text } = props;
	return (
		<div className="alert alert-success" role="alert">
			<h4 className="alert-heading">
				<i className="fa-solid fa-spinner fa-spin"></i> {title}
			</h4>
			<p>{text}</p>
		</div>
	);
};

export default LoadingComponent;
