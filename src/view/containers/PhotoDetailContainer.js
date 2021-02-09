import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useLocation, useRouteMatch} from 'react-router-dom'
import PhotoListContainer from "./PhotoListContainer";
import PhotoDetailCard from "../components/PhotoDetail/PhotoDetailCard";
import {photoActions} from "../../redux/ActionCreators";
import {navigate} from "../../lib/History";
import PhotoRelatedContainer from "./PhotoRelatedContainer";


const PhotoDetailContainer = () => {

    const match = useRouteMatch("/photos/:id");
    const location = useLocation();

    const id = match.params.id;

    const {singlePhoto} = useSelector(state => state.photo);

    useEffect(() => {
        getphotos();
    }, [id])

    const getphotos = () => {
        photoActions.getPhoto(id)
    }

    const closePopup = () => {
        navigate(location.state.from);
        console.log("location", location.state)
    }

    return (
        <Container className={"PhotoDetailContainer"}>
            <PhotoListContainer/>
            <PhotoDetailCard singlePhoto={singlePhoto} closePopup={closePopup}>
                <PhotoRelatedContainer id={id}/>
            </PhotoDetailCard>
        </Container>
    )
}

const Container = styled.div`

`;


export default PhotoDetailContainer;