import React,{useEffect} from 'react';
import styled from 'styled-components';
import {photoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../components/PhotoList/PhotoList";

const PhotoRelatedContainer = ({id}) => {

    const {photoRelated} = useSelector(state => state.photo);


    useEffect(() => {
        getPhotoRelated();
    },[id])

    const getPhotoRelated = () => {
        photoActions.getPhotoRelated(id, {})
    }

    return(
        <Container>
            <PhotoList photos={photoRelated.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoRelatedContainer;