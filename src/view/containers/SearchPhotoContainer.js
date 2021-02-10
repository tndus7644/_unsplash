import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {SearchPhotoActions} from "../../redux/ActionCreators";
import PhotoList from "../components/PhotoList/PhotoList";
import {useRouteMatch} from 'react-router-dom';

const SearchPhotoContainer = () => {

    const match = useRouteMatch("/search/photos/:query")

    const query = match.params.query;

    const {searchResult} = useSelector(state => state.search);

    useEffect(() => {
        searchPhoto();
    }, [query])

    const searchPhoto = () => {
        SearchPhotoActions.searchPhoto({
            per_page:20,
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

export default SearchPhotoContainer;