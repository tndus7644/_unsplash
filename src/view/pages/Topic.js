import React from 'react';
import styled from 'styled-components';
import TopicInfoContainer from "../containers/TopicInfoContainer";
import HeaderContainer from "../containers/HeaderContainer";
import {SearchContainer} from "../../styled/Container";
import TopicsPhotoContainer from "../containers/TopicsPhotoContainer";

const Topic = ({match}) => {

    return (
        <>
            <HeaderContainer/>
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