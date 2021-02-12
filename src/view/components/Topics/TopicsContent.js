import React from 'react';
import styled from 'styled-components';
import TopicDescription from "./TopicDescription";
import TopicInfo from "./TopicInfo";

const TopicsContent = ({topics}) => {

    const {
        title,
        description
    } = topics

    return (
        <Container>
            <TopicDescription title={title} description={description}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsContent;