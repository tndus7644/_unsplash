import React,{useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../PhotoList/PhotoList";
import {useSelector} from "react-redux";
import {photoActions} from "../../../redux/ActionCreators";

const List = () => {

    const {photos} = useSelector(state => state.photo);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = () => {
        photoActions.listPhotos({
            per_page: 20,
        })
    }


    return(
        <Container>
            <PhotoList photos={photos}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
`;

export default List;