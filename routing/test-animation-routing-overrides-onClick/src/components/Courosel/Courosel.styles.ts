import styled from 'styled-components';
import { animated } from  'react-spring';
import galaxy from '../../assets/galaxy.jpg';
import {
  CouroselContainerProps,
  FirstCouroselContainerProps
} from './Courosel.interfaces';

const height = '800px';

const CouroselContainer = styled.div<CouroselContainerProps>`
  /* margin: 0 1.5em 0 1.5em; */
  /* transform: translateY(16%); */
  height: ${props => props.height};
  padding-top: 80px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* overflow: hidden; */
  /* border: 1px solid red; */
  background: black;
`;

/******************************************** */

const CouroselBackground = styled.div<FirstCouroselContainerProps>`
  width: 100%;
  height: ${props => props.height};
  font-size: 100px;
  position: absolute;
  background: #2b1b1b;
  background-image: url(${galaxy});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CouroselContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FirstCouroselTitle = styled.div`
  margin: 8rem 0 0 0;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;


const FirstCouroselSubtitle = styled.div`
  margin: 2rem 0 0 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
`;

const FirstCouroselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  color: white;
  font-size: 1.5rem;
  border: 1px solid white;
  width: 8rem;
  font-weight: 700;
  border-radius: 20px;
`;

/******************************* */

const CouroselItemContainer = styled(animated.div)`
  width: 100%;
  height: ${height};
  display: flex;
  font-size: 100px;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* border: 1px solid green; */
`;

const CouroselImg = styled.img`
  width: 100%;
  height: ${height};
  z-index: 1;
`;

const CouroselInputsContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  /* transform: translateY(-200%); */
  margin: 5rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid white;
`;

const CouroselInputContainer = styled(animated.div)`
  border: 2px solid white;
  border-radius: 5px;
  height: 15px;
  width: 50px;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: white
  }
`;

const CouroselInnerInputContainer = styled(animated.div)`
  height: 100%;
`;

export {
  CouroselContainer,
  CouroselBackground,
  FirstCouroselTitle,
  FirstCouroselSubtitle,
  FirstCouroselContent,
  CouroselContentContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer,
};




