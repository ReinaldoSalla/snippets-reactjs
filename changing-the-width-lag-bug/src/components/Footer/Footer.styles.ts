import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface FooterContainerProps {
  height: string;
}

const FooterContentContainer = styled.div<FooterContainerProps>`
  margin-top: 2rem;
  height: ${(props) => props.height};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
  background: #280808;
`;

const FooterContentLink = styled(Link)`
	font-size: 32px;
	color: white;

	&:hover {
		color: red;
		cursor: pointer;
	}
`;

const FooterMsg = styled.span`
  margin: 0 1rem;
  text-align: center;
  font-size: 32px;
  color: white;

  &.js-msg {
    font-style: italic;
  }
`;

export {
	FooterContentContainer,
	FooterContentLink,
	FooterMsg,
};
