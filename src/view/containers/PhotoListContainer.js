import React,{useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../components/PhotoList/PhotoList";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";

const PhotoListContainer = () => {

    const {list} = useSelector(state => state.photo);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = () => {
        photoActions.listPhotos({
            per_page: 30,
        })
    }


    return(
        <Container>
            <PhotoList photos={list}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
`;

export default PhotoListContainer;