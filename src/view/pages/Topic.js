import React from 'react';
import styled from 'styled-components';
import TopicListContainer from "../containers/TopicListContainer";
import HeaderContainer from "../containers/HeaderContainer";
import {SearchContainer} from "../../styled/Container";

const Topic = ({match}) => {

    return (
        <>
            <HeaderContainer/>
            <Container>
                <TopicListContainer match={match}/>
            </Container>
        </>
    )
}

const Container = styled(SearchContainer)`

`;

export default Topic;