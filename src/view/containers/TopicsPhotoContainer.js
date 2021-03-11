import React,{useEffect} from 'react';
import styled from 'styled-components';
import TopicPhotos from "../components/Topics/TopicPhotos";
import {topicPhotoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";

const TopicsPhotoContainer = () => {

    const match = useRouteMatch("/topics/:slug");

    const slug = match?.params?.slug

    useEffect(() => {
        topicPhotos();
    },[slug])

    const topicPhotos = () => {
        topicPhotoActions.topicPhoto(slug, {
            per_page:12
        })
    }

    const {getTopicPhoto} = useSelector(state => state.topicPhoto);

    console.log("getTopicPhoto", getTopicPhoto)

    return(
        <Container>
            <TopicPhotos photos={getTopicPhoto}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsPhotoContainer;