import styled from 'styled-components';
import { animated } from  'react-spring';
//import galaxy from '../../assets/galaxy.jpg';
import img from '../../assets/imgs/courosel/final/courosel1.jpg';
import {
  CouroselContainerProps,
  FirstCouroselContainerProps
} from './Courosel.interfaces';

const height = '800px';

const CouroselContainer = styled.div<CouroselContainerProps>`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; */
  height: ${props => props.height};
  width: 100%;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

interface CouroselContentContainerProps {
  height: string;
}

const CouroselContentContainer = styled.div<CouroselContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 80px;
  height: ${props => props.height};
  /* border: 10px solid blue; */
`;

const FirstCouroselTitle = styled.div`
  /* margin: 12rem 0 0 0; */
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;


const FirstCouroselSubtitle = styled.div`
  /* margin: 4rem 0 0 0; */
  color: white;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const FirstCouroselContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* margin: 4rem 1rem 0 1rem; */
  /* padding: 0.5rem; */
  color: white;
  font-size: 2rem;
  border: 1px solid white;
  width: 15rem;
  font-weight: 700;
  border-radius: 20px;
`;

const CouroselInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px;
  /* border: 5px solid blue; */
`;

const CouroselInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin: 0 2rem 0 2rem;
  width: 1200px;
  z-index: 2;
  border-bottom: 3px solid white;
  /* border: 1px solid white; */
`;

const CouroselInputContainer = styled(animated.div)`
  /* margin: 0 2rem 0 2rem; */
  height: 20px;
  min-width: 70px;
  border-radius: 5px;
  border: 2px solid white;

  &:hover {
    cursor: pointer;
    background-color: white;
  }
`;

const CouroselInnerInputContainer = styled(animated.div)`
  height: 100%;
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

/********************************************************** */

export {
  CouroselContainer,
  FirstCouroselTitle,
  FirstCouroselSubtitle,
  FirstCouroselContent,
  CouroselContentContainer,
  CouroselItemContainer,
  CouroselImg,
  CouroselInputsWrapper,
  CouroselInputsContainer,
  CouroselInputContainer,
  CouroselInnerInputContainer,
};