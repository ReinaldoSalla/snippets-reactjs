import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoriesContainer = styled.div`
  margin: 50px 0 0 0;
  /* padding: 0.5em; */
`;

interface CategoriesItemContainerProps {
  lastItem?: boolean;
}

const CategoriesItemContainer = styled.div<CategoriesItemContainerProps>`
  margin: ${props => props.lastItem ? '0 1.5em 1.5em 1.5em' : '0 1.5em 3em 1.5em' };
  /* margin: 0 6em 0 6em; */
  border-top: 1px solid black;
  background: aliceblue;
`;

const CategoriesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoriesTitleText = styled.span`
  margin: 0 1em 0.5em 1em;
  margin-bottom: 0.5em;
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  color: black;
`;

const CategoriesDescriptionText = styled.span`
  margin: 0 1em 1em 1em;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: black;
`;

const CategoriesContentsContainer = styled.div`
  margin: 0 2em 0 2em;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CategoriesContentContainer = styled.div`
  flex: 300px;
  margin: 0.5em 2em 2em 2em;
  padding: 0.5em;
  border-radius: 20px;
  transition: transform 500ms;
  transform: scale(0.9);
  height: 200px;
  border: 1px solid black;
  background: #ff000008;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    /* filter: brightness(1.5); */
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;

const CategoriesContentLink = styled(Link)`
  flex: 300px;
  margin: 0.5em 2em 2em 2em;
  padding: 0.5em;
  border-radius: 20px;
  transition: transform 500ms;
  transform: scale(0.9);
  height: 200px;
  border: 1px solid black;
  background: #ff000008;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    /* filter: brightness(1.5); */
  }

  @media (max-width: 600px) {
    height: auto;
  }
`



const CategoriesContentTitleText = styled.div`
  margin: 1.5em 0.25em 1em 0.25em;
  height: 40px;
  font-size: 1.5em;
  text-align: center;
  /* color: #898989; */
  /* font-weight: 500; */
`;  

const CategoriesContentDescriptionText = styled.div`
  margin: 0 0.25em 1.5em 0.25em;
  font-size: 1.25em;
  text-align: center;
  /* color: #898989; */
  /* font-weight: 500; */
`;

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentContainer,
  CategoriesContentLink,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
};