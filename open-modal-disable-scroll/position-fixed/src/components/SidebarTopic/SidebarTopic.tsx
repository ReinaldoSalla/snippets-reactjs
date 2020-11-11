import React from 'react';
import {
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
} from './SidebarTopic.styles';

const SidebarTopics = ({ style, title, contents }) => (
  <Wrapper style={style}>
    <Title>{title}</Title>
    <Topics>
      {contents.map((content, index) => (
        <Topic key={index}>
          <Text>{content}</Text>
        </Topic>
      ))}
    </Topics>
  </Wrapper>
);

export default SidebarTopics;