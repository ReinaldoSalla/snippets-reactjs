import React, { Fragment } from 'react';
import useResize from '../../utils/useResize';
import {
	FooterContentContainer,
	FooterContentLink,
	FooterMsg,
} from './Footer.styles';

const Footer = () => {
	const { height } = useResize();
	return (
		<footer>
			<FooterContentContainer height={`${height - 80}px`}>
				<FooterContentLink to="/contact"> Contact </FooterContentLink>
				<FooterContentLink to="/philosophy"> Philosophy </FooterContentLink>
				<FooterMsg>
					Copyright © {new Date().getFullYear()} JavaScriptTemporal
				</FooterMsg>
				<FooterMsg>All the code in this website is MIT licensed</FooterMsg>
				<FooterMsg className="js-msg">Always bet on JS</FooterMsg>
			</FooterContentContainer>
		</footer>
	);
};

export default Footer;
