import React, {useEffect} from 'react';
import styled from 'styled-components';
import {topicActions} from "../../redux/ActionCreators";

const TopicsContainer = () => {

    useEffect(() => {
        getTopic();
    }, [])

    const getTopic = () => {
        topicActions.getTopics({
            per_page:20
        })
    }


    return (
        <Container>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsContainer;