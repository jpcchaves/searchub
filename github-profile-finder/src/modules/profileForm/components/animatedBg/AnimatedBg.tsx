import React from 'react';
import './style.css';

interface AnimatedBgProps {
	children: React.ReactNode;
}

const AnimatedBg = ({ children }: AnimatedBgProps) => {
	return (
		<>
			{children}
			<div className='background'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	);
};

export default AnimatedBg;
