import React from 'react';
import {
	CategoriesTitleText,
	CategoriesDescriptionText,
  CategoriesContentsWrapper,
  CategoriesContentWrapper,
  CategoriesContentTitle,
  CategoriesContentDescription,
  CategoriesDescriptionWrapper,
  CategoriesContentCheck,
  CategoriesCheckText
} from './Categories.styles';
import topics from '../../data/topics';
import useResize from '../../utils/useResize';
import useVisibility from '../../utils/useVisibility';
import Icon from '../Icon';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ShieldsSvg } from '../../assets/icons/shields.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/icons/arrow.right.svg';

const Checker = ({ title }) => (   
  <CategoriesContentCheck>
    <CategoriesCheckText>Check {title}</CategoriesCheckText>
    <Icon svg={RightArrowSvg} color='#5e0e0eab' padding='0' width='22px' height='22px' border='none'/>
  </CategoriesContentCheck>
);

const CategoriesContent = ({ className, path, title, description, svg }) => (
  <CategoriesContentWrapper className={className} to={path}>
    {className !== 'disabled' && (
      <>
        <Icon
          svg={svg}
          color="#2d0000;"
          border="1px solid #2d0000;"
          width='30px'
          height='30px'
        />
        <CategoriesContentTitle>{title}</CategoriesContentTitle>
        <CategoriesDescriptionWrapper>
          <CategoriesContentDescription>{description}</CategoriesContentDescription>
        </CategoriesDescriptionWrapper>
        <Checker title={title}/>
      </>
    )}
  </CategoriesContentWrapper>
);

const CategoriesContents = ({ contents, svg }) => {
  const { width } = useResize();
  let normalizedContents = contents.map((content) => ({
    ...content,
    className: ''
  }));
  const dummyContent = { path: '', title: '', description: '', className: 'disabled'};
  if (width >= 1127) {
    // 3 columns
    if (normalizedContents.length % 3 === 2) {
      normalizedContents = [...normalizedContents, dummyContent];
    } else if (normalizedContents.length % 3 === 1) {
      normalizedContents = [...normalizedContents, dummyContent, dummyContent];    
    };
  } else if (width < 1127 && width >= 783) {
    // 2 columns
    if (normalizedContents.length % 2 !== 0) {
      normalizedContents = [...normalizedContents, dummyContent];      
    }
  }
  return (
    <CategoriesContentsWrapper>
      {normalizedContents.map((content, index) => (
        <CategoriesContent 
          key={index} 
          className={content.className}
          path={content.path}
          title={content.title}
          description={content.description}
          svg={svg}
        />
      ))}
    </CategoriesContentsWrapper>
  );
};

const CategoriesItem = ({
	svg,
	title,
	description,
	contents,
	currentRef,
	lastItem = false,
}) => (
  <>
    <CategoriesTitleText className={title.toLowerCase()} ref={currentRef}>
      {title}
    </CategoriesTitleText>
    <CategoriesDescriptionText>{description}</CategoriesDescriptionText>

    <CategoriesContents contents={contents} svg={svg} />
  </>
);

const Categories = ({ javaScriptRef, typeScriptRef, reactRef, graphQLRef }) => {
  const [isVisible, ref] = useVisibility();

	return (
		<>
      <div 
        style={{
          height: '350px',
          border: '1px solid black',
          marginTop: '200px'
        }}
        ref={ref}
      >
        content
      </div>
      <CategoriesItem
        svg={JavaScriptSvg}
        title={topics.javascript.title}
        description={topics.javascript.description}
        contents={topics.javascript.contents}
        currentRef={javaScriptRef}
      />
      <CategoriesItem
        svg={ShieldsSvg}
        title={topics.typescript.title}
        description={topics.typescript.description}
        contents={topics.typescript.contents}
        currentRef={typeScriptRef}
      />
      <CategoriesItem
        svg={ReactSvg}
        title={topics.react.title}
        description={topics.react.description}
        contents={topics.react.contents}
        currentRef={reactRef}
      />
      <CategoriesItem
        svg={ServerSvg}
        title={topics.backend.title}
        description={topics.backend.description}
        contents={topics.backend.contents}
        currentRef={graphQLRef}
      />
		</>
	);
};

export default Categories;
