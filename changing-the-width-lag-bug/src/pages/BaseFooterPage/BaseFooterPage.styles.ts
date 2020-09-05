import styled from 'styled-components';

interface WrapperProps {
  height: string;
}

const Wrapper = styled.div<WrapperProps>`
  margin: 0 2rem;
  padding-top: 80px;
  height: ${(props) => props.height};
`;

export { Wrapper };