import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../assets/imgs/boxes/final/box1.jpg';

const contentTextColor = 'white';

const CategoriesContainer = styled.div`
  margin: 50px 0 0 0;
`;

interface CategoriesItemContainerProps {
  lastItem?: boolean;
}

const CategoriesItemContainer = styled.div<CategoriesItemContainerProps>`
  margin: ${props => props.lastItem ? '0 1.5em 1.5em 1.5em' : '0 1.5em 3em 1.5em' };
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
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CategoriesContentLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 2em 2em 2em;
  padding: 0.5em;
  border-radius: 20px;
  transition: transform 500ms, filter 500ms;
  transform: scale(0.9);
  height: 250px;
  width: 1200px;
  border: 1px solid black;
  background: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    filter: brightness(1.5);
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;

const CategoriesContentTitleText = styled.div`
  /* margin: 1.5em 0.25em 1em 0.25em; */
  height: 40px;
  font-size: 1.75em;
  text-align: center;
  color: ${contentTextColor};
  font-weight: 500;
`;  

const CategoriesContentDescriptionText = styled.div`
  /* margin: 0 0.25em 1.5em 0.25em; */
  font-size: 1.5em;
  text-align: center;
  color: ${contentTextColor};
  font-weight: 500;
`;

const CategoriesContentSnippet = styled.div`
  font-size: 2rem; 
  color: white;
  font-style: italic;
  border-radius: 20px; 
  padding: 10px;
  background: #7331317d;
  text-align: center;
`

export {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentLink,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText,
  CategoriesContentSnippet
};