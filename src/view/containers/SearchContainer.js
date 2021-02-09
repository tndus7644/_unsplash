import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";
import PhotoList from "../components/PhotoList/PhotoList";
import {useRouteMatch} from 'react-router-dom';

const SearchContainer = () => {

    const match = useRouteMatch("/search/photos/:query")

    const query = match.params.query;

    const {searchResult} = useSelector(state => state.photo);

    useEffect(() => {
        searchPhoto();
    }, [query])

    const searchPhoto = () => {
        photoActions.searchPhoto({
            per_page: 20,
            query
        })
    }

    return (
        <Container>
            <PhotoList photos={searchResult?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchContainer;