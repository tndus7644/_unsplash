import React from 'react';
import styled from 'styled-components';

const TopicList = ({data = []}) => {

    return (
        <Container>
            {
                data.map((item, index) => <TopicItem key={index}>{item.title}</TopicItem>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  overflow: auto;
  height: 56px;
  align-items: center;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TopicItem = styled.div`
  padding: 0 16px;
  white-space: nowrap;
  color: #777;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #333;
  }
`;

export default TopicList;