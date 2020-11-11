import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 32px;

  ${(props) => props.theme.breakpoints.extraSmall} {
    padding: 0 16px;
  }
`;

const CategoriesBoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 16px;
  padding: 0;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 32px;
  }
`;

const CategoriesBoardDescription = styled.h3`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 32px 16px 0 16px;
  padding: 0;
  color: ${(props) => props.theme.textColor};

  ${(props) => props.theme.breakpoints.small} {
    font-size: 22px;
  }
`;

const CategoriesBoardContents = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const CategoriesBoardEmpty = styled.div`
  flex: 1 1 auto;
  margin: 0 32px;
  height: 0;
  width: 350px;
`;

export {
  Wrapper,
  CategoriesBoardTitle,
  CategoriesBoardDescription,
  CategoriesBoardContents,
  CategoriesBoardEmpty
};