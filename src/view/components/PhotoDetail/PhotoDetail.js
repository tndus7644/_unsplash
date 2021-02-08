import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoDetailCard from "./PhotoDetailCard";
import HomeContainer from "../../containers/HomeContainer";
import List from "../Home/List";
import {photoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const PhotoDetail = (props) => {

    const {
        match
    } = props

    const id = match.params.id;

    const {singlePhoto} = useSelector(state => state.photo);

    useEffect(() => {
        photos();
    },[])

    const photos = () => {
        photoActions.getPhoto({
            id
        })
    }

    return (
        <Container>
            <HomeContainer/>
            <List/>
            <PhotoDetailCard singlePhoto={singlePhoto}/>
        </Container>
    )
}

const Container = styled.div`

`;


export default PhotoDetail;