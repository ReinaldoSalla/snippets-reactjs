import { useEffect, useState } from 'react';

interface Document {
	readonly webkitHidden?: boolean;
	readonly msHidden?: boolean;
	readonly mozHidden?: boolean;
	readonly hidden?: boolean;
}

declare const document: Document;

const getValidBrowser = (): any => {
	if (typeof document.hidden === 'boolean')
		return ['visibilitychange', document.hidden];
	if (typeof document.webkitHidden === 'boolean')
		return ['webkitvisibilitychange', document.webkitHidden];
	if (typeof document.mozHidden === 'boolean')
		return ['mozvisibilitychange', document.mozHidden];
	if (typeof document.msHidden === 'boolean')
		return ['msvisibilitychange', document.msHidden];
	return ['visibilitychange', false];
};

const useDocumentVisibility = () => {
	const [isVisible, setIsVisible] = useState<boolean>(true);
	useEffect(() => {
		window.addEventListener(getValidBrowser()[0], () =>
			setIsVisible(!getValidBrowser()[1])
		);
		return () => (
			window.removeEventListener(getValidBrowser()[0], () => (
				setIsVisible(!getValidBrowser()[1])
      ))
    );
	}, []);
	return isVisible;
};

export default useDocumentVisibility;