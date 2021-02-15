import React,{useEffect} from 'react';
import styled from 'styled-components';
import {relatedPhotoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import PhotoList from "../components/PhotoList/PhotoList";

const PhotoRelatedContainer = ({id}) => {

    const {photoRelated} = useSelector(state => state.relatedPhoto);


    useEffect(() => {
        getPhotoRelated();
    },[id])

    const getPhotoRelated = () => {
        relatedPhotoActions.getPhotoRelated(id, {})
    }

    return(
        <Container className={"PhotoRelatedContainer"}>
            <PhotoList photos={photoRelated.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoRelatedContainer;