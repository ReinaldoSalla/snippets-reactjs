import React from 'react';
import {
	CategoriesTitleText,
	CategoriesDescriptionText,
	CategoriesContentsWrapper,
	CategoriesContentWrapper,
	CategoriesEmpty,
	CategoriesContentTitle,
	CategoriesContentDescription,
	CategoriesDescriptionWrapper,
	CategoriesContentCheck,
	CategoriesCheckText,
} from './Categories.styles';
import topics from '../../data/topics';
import Icon from '../Icon';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ShieldsSvg } from '../../assets/icons/shields.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/icons/arrow.right.svg';

const Checker = ({ title }) => (
	<CategoriesContentCheck>
		<CategoriesCheckText>Check {title}</CategoriesCheckText>
		<Icon
			svg={RightArrowSvg}
			color="#5e0e0eab"
			padding="0"
			width="22px"
			height="22px"
			border="none"
		/>
	</CategoriesContentCheck>
);

const CategoriesContent = ({ className, path, title, description, svg }) => {
	return (
		<CategoriesContentWrapper className={className} to={path}>
			{className !== 'disabled' && (
				<>
					<Icon
						svg={svg}
						color="#2d0000;"
						border="1px solid #2d0000;"
						width="30px"
						height="30px"
					/>
					<CategoriesContentTitle>{title}</CategoriesContentTitle>
					<CategoriesDescriptionWrapper>
						<CategoriesContentDescription>
							{description}
						</CategoriesContentDescription>
					</CategoriesDescriptionWrapper>
					<Checker title={title} />
				</>
			)}
		</CategoriesContentWrapper>
	);
};

const CategoriesContents = ({ contents, svg }) => {
	return (
		<CategoriesContentsWrapper>
			{contents.map((content, index) => (
				<CategoriesContent
					key={index}
					className={content.className}
					path={content.path}
					title={content.title}
					description={content.description}
					svg={svg}
				/>
			))}
			<CategoriesEmpty />
			<CategoriesEmpty />
			<CategoriesEmpty />
			<CategoriesEmpty />
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
	return (
		<>
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
