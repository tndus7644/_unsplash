import React from 'react';
import styled from 'styled-components';
import TopicInfoContainer from "../containers/TopicInfoContainer";
import {SearchContainer} from "../../styled/Container.Styled";
import TopicsPhotoContainer from "../containers/TopicsPhotoContainer";

const Topic = ({match}) => {

    return (
        <>
            <Container>
                <TopicInfoContainer match={match}/>
                <TopicsPhotoContainer match={match}/>
            </Container>
        </>
    )
}

const Container = styled(SearchContainer)`

`;

export default Topic;