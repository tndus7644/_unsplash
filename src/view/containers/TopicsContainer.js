import React, {useEffect} from 'react';
import styled from 'styled-components';
import {topicActions} from "../../redux/ActionCreators";

const TopicsContainer = () => {

    useEffect(() => {
        listTopic();
    }, [])

    const listTopic = () => {
        topicActions.listTopics({
            per_page:20
        })
    }


    return (
        <Container className={"TopicsContainer"}>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsContainer;