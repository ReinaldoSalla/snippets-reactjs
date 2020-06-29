import React from "react";

const Input = React.forwardRef(({ onKeyDown, placeholder }, ref) => {
	return (
		<input
			ref={ref}
			onKeyDown={onKeyDown}
			placeholder={placeholder}
		/>
	);
});

export default Input;

