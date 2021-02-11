import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import PhotoCollectionsList from "../components/PhotoCollections/PhotoCollectionsList";
import {CollectionsPhotosActions} from "../../redux/ActionCreators";

const SearchCollectionsContainer = () => {

    const match = useRouteMatch("/search/collections/:query")

    const query = match?.params?.query;

    const {collection} = useSelector(state => state.collection);

    useEffect(() => {
        Collections();
    },[query])

    const Collections = () => {
        CollectionsPhotosActions.collectionPhoto({
            query,
            per_page:9
        })
    }

    console.log("collections", collection?.results)


    return (
        <Container className={"SearchCollectionsContainer"}>
            <PhotoCollectionsList collection={collection?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchCollectionsContainer;