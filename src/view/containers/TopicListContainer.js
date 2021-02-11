import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import TopicsContent from "../components/Topics/TopicsContent";

const TopicListContainer = ({match}) => {

    const slug = match.params.slug;

    useEffect(() => {
        TopicList();
    },[slug])

    const TopicList = () => {
        topicActions.getTopics(slug)
    }

    const {topics} = useSelector(state => state.topic)


    return(
        <Container className={"TopicListContainer"}>
            <TopicsContent topics={topics}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicListContainer;