import * as Icon from "phosphor-react";

const AnimatedIcon = () => {
	return (
		<Icon.GithubLogo
			size={32}
			color="#0f0f0f"
			className="absolute right-3 top-3"
		>
			<animate
				attributeName="opacity"
				values="0;1;0"
				dur="3s"
				repeatCount="indefinite"
			></animate>
			<animateTransform
				attributeName="transform"
				attributeType="XML"
				type="scale"
				dur="3s"
				values="1;1.2;1"
				repeatCount="indefinite"
			/>
		</Icon.GithubLogo>
	);
};

export default AnimatedIcon;
