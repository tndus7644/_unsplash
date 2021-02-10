import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useRouteMatch} from "react-router-dom";
import {useSelector} from "react-redux";
import PhotoCollectionsList from "../components/PhotoCollections/PhotoCollectionsList";
import {CollectionsPhotos} from "../../redux/ActionCreators";

const CollectionsPhotoContainer = () => {

    const match = useRouteMatch("/search/collections/:query")

    const query = match.params.query;

    const {collection} = useSelector(state => state.collection);

    useEffect(() => {
        Collections();
    },[query])

    const Collections = () => {
        CollectionsPhotos.collectionPhoto({
            query
        })
    }

    console.log("collections", collection?.results)


    return (
        <Container>
            <PhotoCollectionsList collection={collection?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CollectionsPhotoContainer;