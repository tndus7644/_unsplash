import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import TopicsContent from "../components/Topics/TopicsContent";
import TopicInfo from "../components/Topics/TopicInfo";

const TopicListContainer = ({match}) => {

    const slug = match.params.slug;

    useEffect(() => {
        Topics();
    },[slug])

    const Topics = () => {
        topicActions.getTopics(slug)
    }

    const {topics} = useSelector(state => state.topic)

    console.log("topics", topics)

    return(
        <Container className={"TopicListContainer"}>
            <TopicsContent topics={topics}/>
            <TopicInfo topics={topics}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TopicListContainer;