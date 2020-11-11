import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WrapperProps from './CategoriesBox.types';

const Wrapper = styled(Link)<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 1 auto;
  width: 350px;
  min-height: 350px;
  border-width: 1px 2px;
  border-style: solid;
  border-color: #393838;
  margin: 0 32px 48px 32px;
  background: ${(props) => props.theme.boxBgColor};
  transition: border-color;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};
  
  &:hover {
    cursor: pointer;
    border-color: red;
  }
`;

const IconWrapper = styled.div`
  padding: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 50%;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    padding: 12px;
    width: 22px;
    height: 22px;    
  }
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;

  ${(props) => props.theme.breakpoints.small} {
    width: 22px;
    height: 22px;
  }
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 18px;
  }
`;

const DescriptionWrapper = styled.div`
  min-height: 40px;
`;

const Description = styled.p`
  margin: 0 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.weakerTextColor};


  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const Check = styled.span`
  font-size: 16px;
  line-height: 70%;
  margin-right: 8px;
  font-weight: 300;
  text-align: center;
  transform: translateY(-2.5px);
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 14px;
  }
`;

export {
  Wrapper,
  IconWrapper,
  Icon,
  Title,
  DescriptionWrapper,
  Description,
  Check
};