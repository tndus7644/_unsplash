import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {useLocation, useRouteMatch} from 'react-router-dom'

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
        getphoto();
    }, [id])

    const getphoto = () => {
        photoActions.getPhoto(id)
    }

    const closePopup = () => {
        navigate(location.state.from);
        console.log("location", location.state)
    }

    return (
        <Container className={"PhotoDetailContainer"}>
            <PhotoDetailCard singlePhoto={singlePhoto} closePopup={closePopup}>
                <PhotoRelatedContainer id={id}/>
            </PhotoDetailCard>
        </Container>
    )
}

const Container = styled.div`

`;


export default PhotoDetailContainer;